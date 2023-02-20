import { DMChannel, GuildBan, GuildChannel, GuildEmoji } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildBanAddEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_BAN_ADD)
  on(ban: GuildBan) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_BAN_ADD,
      ban
    );
  }
}

export default GuildBanAddEvent;
