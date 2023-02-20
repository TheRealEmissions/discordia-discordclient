import { Guild } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_DELETE)
  on(guild: Guild) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_DELETE,
      guild
    );
  }
}

export default GuildDeleteEvent;
