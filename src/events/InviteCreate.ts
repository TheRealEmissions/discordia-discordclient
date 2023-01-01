import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class InviteCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.INVITE_CREATE)
  on(inv: Invite) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.INVITE_CREATE,
      inv
    );
  }
}

export default InviteCreateEvent;
