import { DMChannel, GuildChannel } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class ChannelCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.CHANNEL_CREATE)
  on(channel: DMChannel | GuildChannel) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.CHANNEL_CREATE,
      channel
    );
  }
}

export default ChannelCreateEvent;
