import { DMChannel, GuildChannel } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class ChannelDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.CHANNEL_DELETE)
  on(channel: DMChannel | GuildChannel) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.CHANNEL_DELETE,
      channel
    );
  }
}

export default ChannelDeleteEvent;
