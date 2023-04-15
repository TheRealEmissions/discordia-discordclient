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

class MessageReactionRemoveEmojiEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.MESSAGE_REACTION_REMOVE_EMOJI)
  on(m: MessageReaction) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.MESSAGE_REACTION_REMOVE_EMOJI,
      m
    );
  }
}

export default MessageReactionRemoveEmojiEvent;
