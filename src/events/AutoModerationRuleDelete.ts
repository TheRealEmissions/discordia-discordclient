import { AutoModerationRule } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class AutoModerationRuleDeleteEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.AUTO_MODERATION_RULE_DELETE)
  on(data: AutoModerationRule) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.AUTO_MODERATION_RULE_DELETE,
      data
    );
  }
}

export default AutoModerationRuleDeleteEvent;
