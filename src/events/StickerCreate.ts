import {
  Guild,
  GuildMember,
  GuildScheduledEvent,
  Invite,
  Message,
  Role,
  StageInstance,
  Sticker,
  User,
} from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class StickerCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.STICKER_CREATE)
  on(s: Sticker) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.STICKER_CREATE,
      s
    );
  }
}

export default StickerCreateEvent;
