import { AutoModerationRule } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class AutoModerationRuleUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.AUTO_MODERATION_RULE_UPDATE)
  on(old: AutoModerationRule | undefined, notOld: AutoModerationRule) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.AUTO_MODERATION_RULE_UPDATE,
      old,
      notOld
    );
  }
}

export default AutoModerationRuleUpdateEvent;
