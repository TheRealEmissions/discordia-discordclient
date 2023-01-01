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

  // this is the gist of what we're doing, all of the events from the discord client need to be mapped to the Events addon
  // each event needs a class of its own (fuck this shit)
  // good luck <3
  // ive opened CommonEvents.d.ts, all the events are in there
  // you start at the bottom, ill start at the top

  // ensure that you import it in App.ts too like I've done
  // how do I know what type I should assign to an method argument
  // discord.js.org
  // cant find any of them. I can't find a type. can you send me the exact page of that

  // its under the Client object, as the Client broadcasts events
  // yeee i found it thanks
}

export default InteractionCreateEvent;
