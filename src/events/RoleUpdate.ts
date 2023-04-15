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

class RoleUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.ROLE_UPDATE)
  on(r: Role, nr: Role) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.ROLE_UPDATE,
      r,
      nr
    );
  }
}

export default RoleUpdateEvent;
