import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class VoiceStateUpdateEvent {
  @ClientEvents.bind(
    BaseApp.Events.DiscordEvents.APPLICATION_COMMAND_PERMISSIONS_UPDATE
  )
  on(oldState: VoiceState, newState: VoiceState) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.VOICE_STATE_UPDATE,
      oldState,
      newState
    );
  }
}
export default VoiceStateUpdateEvent;

// gonna go eat, ill push these changes, you carry on.
// ill carry on when im back
