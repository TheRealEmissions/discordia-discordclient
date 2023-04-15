import { DMChannel, GuildChannel } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class ChannelUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.CHANNEL_UPDATE)
  on(old: DMChannel | GuildChannel, notOld: DMChannel | GuildChannel) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.CHANNEL_UPDATE,
      old,
      notOld
    );
  }
}

export default ChannelUpdateEvent;
