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

class StageInstanceCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.STAGE_INSTANCE_CREATE)
  on(s: StageInstance) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.STAGE_INSTANCE_CREATE,
      s
    );
  }
}

export default StageInstanceCreateEvent;
