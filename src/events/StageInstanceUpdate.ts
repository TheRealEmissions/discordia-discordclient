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
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class StageInstanceUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.STAGE_INSTANCE_UPDATE)
  on(s: StageInstance | undefined, ns: StageInstance) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.STAGE_INSTANCE_UPDATE,
      s,
      ns
    );
  }
}

export default StageInstanceUpdateEvent;
