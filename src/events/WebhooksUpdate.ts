import BaseApp from "@src/BaseApp.js";
import {
  TextChannel,
  NewsChannel,
  VoiceChannel,
  ForumChannel,
} from "discord.js";
import ClientEvents from "@decorators/ClientEvents.js";

class WebhooksUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.WEBHOOKS_UPDATE)
  on(data: TextChannel | NewsChannel | VoiceChannel | ForumChannel) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.WEBHOOKS_UPDATE,
      data
    );
  }
}
export default WebhooksUpdateEvent;
