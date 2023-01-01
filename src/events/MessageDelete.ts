import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class MessageDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_DELETE)
  on(m: Message) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_DELETE,
      m
    );
  }
}

export default MessageDeleteEvent;
