import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class ReadyEvent {
  constructor() {}

  @ClientEvents.bind(
    BaseApp.Events.DiscordEvents.READY,
    BaseApp.Events.EventTypes.ONCE
  )
  on() {
    console.log("on method called");
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.GeneralEvents.INFO,
      "Discord Bot is ready!",
      `Username: ${BaseApp.Client?.user?.tag}`
    );
  }
}

export default ReadyEvent;
