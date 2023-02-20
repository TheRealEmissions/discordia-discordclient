import Base from "ts-modular-bot-file-design";
import { Dependency, Dependencies } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import Discord from "discord.js";
import { AuthConfig } from "../config/internal/Auth.js";

abstract class BaseApp extends Base {
  constructor() {
    super();
  }

  type = Dependency.DISCORD_CLIENT;
  name: string = "Discord Client";
  load = true;
  static sharded = process.argv.includes("--sharded")
    ? false
    : AuthConfig.sharded;
  getSharded() {
    return BaseApp.sharded;
  }

  @Dependencies.inject(Dependency.EVENTS)
  static Events: typeof Events;

  static readonly Client = this.sharded
    ? null
    : new Discord.Client(AuthConfig.options);
  getClient() {
    if (!BaseApp.Client)
      throw new Error(
        "Sharding enabled! You should access the Client on its shards!"
      );
    return BaseApp.Client;
  }

  static readonly Rest = new Discord.REST({ version: "10" }).setToken(
    AuthConfig.token
  );
  getRest() {
    return BaseApp.Rest;
  }

  abstract init(): Promise<void>;
  getDependencies(): Dependency[] {
    return [Dependency.EVENTS];
  }

  static readonly ShardManager = this.sharded
    ? new Discord.ShardingManager("./addons/Discord Client/out/src/App.js", {
        token: AuthConfig.token,
        mode: "process",
        shardArgs: ["--sharded"],
      })
    : null;
  getShardManager() {
    if (!BaseApp.ShardManager)
      throw new Error("Sharding not enabled (or this is a shard!)");
    return BaseApp.ShardManager;
  }
}

export default BaseApp;
