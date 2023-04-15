import { Guild, GuildMember } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class GuildMemberRemoveEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_MEMBER_REMOVE)
  on(member: GuildMember) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_MEMBER_REMOVE,
      member
    );
  }
}

export default GuildMemberRemoveEvent;
