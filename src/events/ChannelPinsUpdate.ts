import { DMChannel, GuildChannel, TextBasedChannel } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class ChannelPinsUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.CHANNEL_PINS_UPDATE)
  on(channel: TextBasedChannel, time: Date) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.CHANNEL_PINS_UPDATE,
      channel,
      time
    );
  }
}

export default ChannelPinsUpdateEvent;
