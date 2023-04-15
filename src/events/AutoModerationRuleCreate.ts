import { AutoModerationRule } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class AutoModerationRuleCreateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.AUTO_MODERATION_RULE_CREATE)
  on(data: AutoModerationRule) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.AUTO_MODERATION_RULE_CREATE,
      data
    );
  }
}

export default AutoModerationRuleCreateEvent;
