import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  Presence,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class PresenceUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.PRESENCE_UPDATE)
  on(o: Presence | undefined, n: Presence) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.PRESENCE_UPDATE,
      o,
      n
    );
  }
}

export default PresenceUpdateEvent;
