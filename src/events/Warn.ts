import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class WarnEvent {
  @ClientEvents.bind(
    BaseApp.Events.DiscordEvents.
  )
  on(data: string) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.VOICE_STATE_UPDATE,
      oldState,
      newState
    );
  }
}
export default WarnEvent;
