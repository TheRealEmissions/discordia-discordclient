import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class InviteDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.INVITE_DELETE)
  on(inv: Invite) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.INVITE_DELETE,
      inv
    );
  }
}

export default InviteDeleteEvent;
