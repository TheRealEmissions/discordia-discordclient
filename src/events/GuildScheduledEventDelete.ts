import { Guild, GuildMember, GuildScheduledEvent } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildScheduledEventCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_DELETE)
  on(event: GuildScheduledEvent) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_DELETE,
      event
    );
  }
}

export default GuildScheduledEventCreateEvent;
