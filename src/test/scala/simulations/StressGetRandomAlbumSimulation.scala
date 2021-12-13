package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class StressGetRandomAlbumSimulation extends BaseSimulation {

  def GetAlbum(max : Int) =
    exec(
      http("Album get request")
        .get(s"/todos/${getRandomId(max)}")
          .check(status.is(200))
    )

  val scn = scenario("Getting random album scenario")
    .exec(GetAlbum(50))

  setUp(scn.inject(
    stressPeakUsers(150)  during 2)
    .protocols(httpConf))
}
