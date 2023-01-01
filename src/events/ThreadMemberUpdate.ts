import { Collection, Snowflake, ThreadMember, ThreadChannel } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class ThreadMembersUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.THREAD_MEMBERS_UPDATE)
  on(
    added: Collection<Snowflake, ThreadMember>,
    removed: Collection<Snowflake, ThreadMember>,
    thread: ThreadChannel
  ) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.THREAD_MEMBERS_UPDATE,
      added,
      removed,
      thread
    );
  }
}
export default ThreadMembersUpdateEvent;
