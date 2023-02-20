import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";
import { ThreadChannel } from "discord.js";

class ThreadUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.THREAD_UPDATE)
  on(oldThread: ThreadChannel, newThread: ThreadChannel) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.THREAD_UPDATE,
      oldThread,
      newThread
    );
  }
}
export default ThreadUpdateEvent;
