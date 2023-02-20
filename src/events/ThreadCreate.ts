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

class ThreadCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.THREAD_CREATE)
  on(t: ThreadChannel, n: boolean) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.THREAD_CREATE,
      t,
      n
    );
  }
}

export default ThreadCreateEvent;
