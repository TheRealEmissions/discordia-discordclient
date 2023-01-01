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

class MessageUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_UPDATE)
  on(m: Message, nm: Message) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_UPDATE,
      m, nm
    );
  }
}

export default MessageUpdateEvent;
