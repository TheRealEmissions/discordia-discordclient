import { Guild, GuildMember, GuildScheduledEvent, User } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class GuildUnavailableEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_UNAVAILABLE)
  on(guild: Guild) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_UNAVAILABLE,
      guild
    );
  }
}

export default GuildUnavailableEvent;
