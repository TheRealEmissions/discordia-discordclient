import { AutoModerationActionExecution } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class AutoModerationActionExecutionEvent {
  @ClientEvents.bind(
    BaseApp.Events.DiscordEvents.AUTO_MODERATION_ACTION_EXECUTION
  )
  on(autoModerationActionExecution: AutoModerationActionExecution) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.AUTO_MODERATION_ACTION_EXECUTION,
      autoModerationActionExecution
    );
  }
}

export default AutoModerationActionExecutionEvent;
