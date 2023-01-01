import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";
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

// gonna go eat, ill push these changes, you carry on.
// ill carry on when im back
// ok
