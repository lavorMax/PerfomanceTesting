package baseConfig

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class BaseSimulation extends Simulation {
    val httpConf = http
      .baseUrl("https://jsonplaceholder.typicode.com")
        .header("Accept", "application/json")

    def getRandomId(max : Int): Int =
        scala.util.Random.between(1, max)
}
