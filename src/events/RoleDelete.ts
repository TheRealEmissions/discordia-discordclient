import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  Role,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class RoleDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.ROLE_DELETE)
  on(r: Role) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.ROLE_DELETE,
      r
    );
  }
}

export default RoleDeleteEvent;
