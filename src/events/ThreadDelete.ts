import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  Role,
  StageInstance,
  Sticker,
  ThreadChannel,
  User,
} from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class ThreadDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.THREAD_DELETE)
  on(t: ThreadChannel) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.THREAD_DELETE,
      t
    );
  }
}

export default ThreadDeleteEvent;
