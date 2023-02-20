import { DMChannel, GuildChannel } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class DebugEvent {
  @ClientEvents.bind(BaseApp.Events.GeneralEvents.DEBUG)
  on(info: string) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.GeneralEvents.DEBUG,
      info
    );
  }
}

export default DebugEvent;
