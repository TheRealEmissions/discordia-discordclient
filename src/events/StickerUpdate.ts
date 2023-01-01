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
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class StickerUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.STICKER_UPDATE)
  on(s: Sticker, ns: Sticker) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.STICKER_UPDATE,
      s,
      ns
    );
  }
}

export default StickerUpdateEvent;
