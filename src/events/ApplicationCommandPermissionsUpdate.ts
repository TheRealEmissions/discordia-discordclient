import { ApplicationCommandPermissionsUpdateData } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class ApplicationCommandPermissionsUpdateEvent {
  @ClientEvents.bind(
    BaseApp.Events.DiscordEvents.APPLICATION_COMMAND_PERMISSIONS_UPDATE
  )
  on(data: ApplicationCommandPermissionsUpdateData) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.APPLICATION_COMMAND_PERMISSIONS_UPDATE,
      data
    );
  }
}

export default ApplicationCommandPermissionsUpdateEvent;
