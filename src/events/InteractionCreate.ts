import { Interaction } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class InteractionCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.INTERACTION_CREATE)
  on(interaction: Interaction) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.INTERACTION_CREATE,
      interaction
    );
  }
}

export default InteractionCreateEvent;
