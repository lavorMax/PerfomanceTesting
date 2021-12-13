package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class LoadDeleteTodosSimulation extends BaseSimulation{
  def DeleteTodos(max: Int) =
    exec(
      http("Delete todo request")
        .delete(s"/todos/${getRandomId(max)}")
        . check(status.is(200))
    )

  val scn = scenario("Delete todo scenario")
    .exec(DeleteTodos(200))

  setUp(scn.inject(
    rampUsers(10).during(5))
    .protocols(httpConf))
}
