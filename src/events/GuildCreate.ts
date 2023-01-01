import { Guild } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class GuildCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_CREATE)
  on(guild: Guild) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_CREATE,
      guild
    );
  }
}

export default GuildCreateEvent;
