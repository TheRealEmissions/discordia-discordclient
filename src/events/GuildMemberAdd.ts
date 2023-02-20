import { Guild, GuildMember } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

class GuildMemberAddEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_MEMBER_ADD)
  on(member: GuildMember) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_MEMBER_ADD,
      member
    );
  }
}

export default GuildMemberAddEvent;
