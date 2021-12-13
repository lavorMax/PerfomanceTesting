package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class EnduranceAddCommentsSimulation extends BaseSimulation {
  def AddComment(max : Int) =
    exec(
      http("Add comment request")
        .get("/comments")
          .body(StringBody(
            s"""postId": ${getRandomId(max)},
              |    "name": "testName",
              |    "email": "testEmail@gmail.com",
              |    "body": "random test comment" """))
                .check(status.is(200))
    )

  val scn = scenario("Getting random album scenario")
    .exec(AddComment(100))

  setUp(scn.inject(
    rampUsersPerSec(50).to(100).during(10))
    .protocols(httpConf))
}
