import { DMChannel, GuildChannel, GuildEmoji } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class EmojiUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.EMOJI_UPDATE)
  on(old: GuildEmoji, notOld: GuildEmoji) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.EMOJI_UPDATE,
      old,
      notOld
    );
  }
}

export default EmojiUpdateEvent;
