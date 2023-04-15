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

class RoleCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.ROLE_CREATE)
  on(r: Role) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.ROLE_CREATE,
      r
    );
  }
}

export default RoleCreateEvent;
