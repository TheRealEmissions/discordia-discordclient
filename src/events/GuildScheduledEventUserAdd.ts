import { Guild, GuildMember, GuildScheduledEvent, User } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class GuildScheduledEventUserAddEvent {
  @ClientEvents.bind(
    BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_USER_ADD
  )
  on(event: GuildScheduledEvent, user: User) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_SCHEDULED_EVENT_USER_ADD,
      event,
      user
    );
  }
}

export default GuildScheduledEventUserAddEvent;
