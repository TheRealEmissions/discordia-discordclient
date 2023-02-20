import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  User,
} from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class MessageCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_CREATE)
  on(m: Message) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_CREATE,
      m
    );
  }
}

export default MessageCreateEvent;
