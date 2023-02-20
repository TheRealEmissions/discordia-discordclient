import { DMChannel, GuildChannel, GuildEmoji } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class EmojiDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.EMOJI_DELETE)
  on(emoji: GuildEmoji) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.EMOJI_DELETE,
      emoji
    );
  }
}

export default EmojiDeleteEvent;
