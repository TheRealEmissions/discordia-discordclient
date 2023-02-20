import { Guild, GuildMember, GuildScheduledEvent } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildScheduledEventUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_UPDATE)
  on(old: GuildScheduledEvent | undefined, notOld: GuildScheduledEvent) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_UPDATE,
      old,
      notOld
    );
  }
}

export default GuildScheduledEventUpdateEvent;
