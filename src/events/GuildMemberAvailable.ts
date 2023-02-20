import { Guild, GuildMember } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildMemberAvailableEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_MEMBER_AVAILABLE)
  on(member: GuildMember) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_MEMBER_AVAILABLE,
      member
    );
  }
}

export default GuildMemberAvailableEvent;
