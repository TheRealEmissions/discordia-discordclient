import {
  Collection,
  Guild,
  GuildMember,
  GuildScheduledEvent,
  GuildTextBasedChannel,
  Invite,
  Message,
  Snowflake,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class MessageDeleteBulkEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_DELETE_BULK)
  on(m: Collection<Snowflake, Message>, channel: GuildTextBasedChannel) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_DELETE_BULK,
      m,
      channel
    );
  }
}

export default MessageDeleteBulkEvent;
