import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  Role,
  StageInstance,
  User,
} from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class StageInstanceDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.STAGE_INSTANCE_DELETE)
  on(s: StageInstance) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.STAGE_INSTANCE_DELETE,
      s
    );
  }
}

export default StageInstanceDeleteEvent;
