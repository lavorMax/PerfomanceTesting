package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class SpikeGetAllPhotosSimulation extends BaseSimulation{
  def GetAllPhotos() =
    exec(
      http("All photos request")
        .get("/photos")
          .check(status.is(200))
    )

  val scn = scenario("Getting all photos scenario")
    .exec(GetAllPhotos())

  setUp(scn.inject(
    atOnceUsers(20))
    .protocols(httpConf))
}
