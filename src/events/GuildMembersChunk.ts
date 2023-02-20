import { Collection, Guild, GuildMember, Snowflake } from "discord.js";
import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";

type GuildMembersChunk = {
  index: number;
  count: number;
  nonce?: string;
};

class GuildMembersChunkEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.GUILD_MEMBERS_CHUNK)
  on(
    members: Collection<Snowflake, GuildMember>,
    guild: Guild,
    chunk: GuildMembersChunk
  ) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.GUILD_MEMBERS_CHUNK,
      members,
      guild,
      chunk
    );
  }
}

export default GuildMembersChunkEvent;
