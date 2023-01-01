import { Guild, GuildMember } from "discord.js";
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";

class GuildMemberUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_MEMBER_UPDATE)
  on(old: GuildMember, notOld: GuildMember) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_MEMBER_UPDATE,
      old,
      notOld
    );
  }
}

export default GuildMemberUpdateEvent;
