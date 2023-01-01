import {
  Collection,
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  Role,
  Snowflake,
  StageInstance,
  Sticker,
  ThreadChannel,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class ThreadListSyncEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.THREAD_LIST_SYNC)
  on(t: Collection<Snowflake, ThreadChannel>, g: Guild) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.THREAD_LIST_SYNC,
      t,
      g
    );
  }
}

export default ThreadListSyncEvent;
