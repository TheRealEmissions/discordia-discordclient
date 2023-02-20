import {
  DiscordEvents,
  EventTypes,
  GeneralEvents,
} from "ts-modular-bot-addon-events-types";
import BaseApp from "@src/BaseApp.js";
import { ClientEvents as DiscordClientEvents } from "discord.js";

class ClientEvents {
  static bind(
    eventName: DiscordEvents | GeneralEvents,
    type: EventTypes = BaseApp.Events.EventTypes.ON
  ) {
    return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) => {
      if (BaseApp.sharded) return;
      switch (type) {
        case BaseApp.Events.EventTypes.ON:
          BaseApp.Client?.on(
            eventName as keyof DiscordClientEvents,
            descriptor.value
          );
          break;
        case BaseApp.Events.EventTypes.ONCE:
          BaseApp.Client?.once(
            eventName as keyof DiscordClientEvents,
            descriptor.value
          );
          break;
      }
    };
  }
}

export default ClientEvents;
