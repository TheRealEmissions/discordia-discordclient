import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class WarnEvent {
  @ClientEvents.bind(BaseApp.Events.GeneralEvents.WARN)
  on(info: string) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.GeneralEvents.WARN,
      info
    );
  }
}
export default WarnEvent;
