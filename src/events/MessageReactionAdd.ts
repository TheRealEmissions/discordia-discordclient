import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  MessageReaction,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class MessageReactionAddEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_REACTION_ADD)
  on(m: MessageReaction, u: User) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_REACTION_ADD,
      m,
      u
    );
  }
}

export default MessageReactionAddEvent;
