import { Guild, GuildMember, GuildScheduledEvent, User } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildScheduledEventUserRemoveEvent {
  @ClientEvents.bind(
    BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_USER_REMOVE
  )
  on(event: GuildScheduledEvent, user: User) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_USER_REMOVE,
      event,
      user
    );
  }
}

export default GuildScheduledEventUserRemoveEvent;
