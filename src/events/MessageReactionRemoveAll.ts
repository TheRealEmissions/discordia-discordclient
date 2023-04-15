import {
  Collection,
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  MessageReaction,
  Snowflake,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class MessageReactionRemoveAllEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_REACTION_REMOVE_ALL)
  on(m: Message, u: Collection<string | Snowflake, MessageReaction>) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_REACTION_REMOVE_ALL,
      m,
      u
    );
  }
}

export default MessageReactionRemoveAllEvent;
