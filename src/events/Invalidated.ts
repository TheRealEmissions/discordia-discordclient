import { Guild, GuildMember, GuildScheduledEvent, User } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class InvalidatedEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.INVALIDATED)
  on(guild: Guild) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.INVALIDATED,
      guild
    );
  }
}

export default InvalidatedEvent;
