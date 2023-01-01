import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";
import { VoiceState } from "discord.js";

class VoiceStateUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.VOICE_STATE_UPDATE)
  on(oldState: VoiceState, newState: VoiceState) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.VOICE_STATE_UPDATE,
      oldState,
      newState
    );
  }
}
export default VoiceStateUpdateEvent;
