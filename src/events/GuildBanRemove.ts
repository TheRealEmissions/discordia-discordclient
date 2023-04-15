import { DMChannel, GuildBan, GuildChannel, GuildEmoji } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class GuildBanRemoveEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_BAN_REMOVE)
  on(ban: GuildBan) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_BAN_REMOVE,
      ban
    );
  }
}

export default GuildBanRemoveEvent;
