import { Guild, GuildMember, GuildScheduledEvent, User } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_UPDATE)
  on(guild: Guild, newGuild: Guild) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_UPDATE,
      guild,
      newGuild
    );
  }
}

export default GuildUpdateEvent;
