import { DMChannel, GuildChannel, GuildEmoji } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class ErrorEvent {
  @ClientEvents.bind(BaseApp.Events.GeneralEvents.ERROR)
  on(error: Error) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.GeneralEvents.ERROR,
      error
    );
  }
}

export default ErrorEvent;
