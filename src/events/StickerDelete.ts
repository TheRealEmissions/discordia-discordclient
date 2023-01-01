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

class StickerDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.STICKER_DELETE)
  on(s: Sticker) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.STICKER_DELETE,
      s
    );
  }
}

export default StickerDeleteEvent;
