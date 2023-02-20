import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  MessageReaction,
  User,
} from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class MessageReactionRemoveEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_REACTION_REMOVE)
  on(m: MessageReaction, u: User) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_REACTION_REMOVE,
      m,
      u
    );
  }
}

export default MessageReactionRemoveEvent;
