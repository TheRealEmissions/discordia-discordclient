import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";
import { Typing } from "discord.js";

class TypingStartEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.TYPING_START)
  on(data: Typing) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.TYPING_START,
      data
    );
  }
}
export default TypingStartEvent;
