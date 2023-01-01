import { DMChannel, GuildChannel, GuildEmoji } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class EmojiCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.EMOJI_CREATE)
  on(emoji: GuildEmoji) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.EMOJI_CREATE,
      emoji
    );
  }
}

export default EmojiCreateEvent;
