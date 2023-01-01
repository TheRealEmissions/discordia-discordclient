import { Guild } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class GuildIntegrationsUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_INTEGRATIONS_UPDATE)
  on(guild: Guild) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_INTEGRATIONS_UPDATE,
      guild
    );
  }
}

export default GuildIntegrationsUpdateEvent;
