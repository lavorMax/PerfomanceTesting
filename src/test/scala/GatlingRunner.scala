import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder
import simulations.*

@main def main =
  val simClass = classOf[LoadDeleteTodosSimulation].getName

  val props = new GatlingPropertiesBuilder

  props.simulationClass(simClass)

  Gatling.fromMap(props.build)














