var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency, Dependencies } from "ts-modular-bot-types";
import Discord from "discord.js";
import { AuthConfig } from "../config/Auth.js";
class BaseApp extends HeadFile {
    constructor() {
        super();
    }
    type = Dependency.DISCORD_CLIENT;
    name = "Discord Client";
    load = true;
    static sharded = process.argv.includes("--sharded")
        ? false
        : AuthConfig.sharded;
    getSharded() {
        return BaseApp.sharded;
    }
    static Events;
    static Client = AuthConfig.sharded
        ? null
        : new Discord.Client(AuthConfig.options);
    getClient() {
        if (!BaseApp.Client)
            throw new Error("Sharding enabled! You should access the Client on its shards!");
        return BaseApp.Client;
    }
    static Rest = new Discord.REST({ version: "10" }).setToken(AuthConfig.token);
    getRest() {
        return BaseApp.Rest;
    }
    getDependencies() {
        return [Dependency.EVENTS];
    }
    static ShardManager = this.sharded
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
__decorate([
    Dependencies.inject(Dependency.EVENTS)
], BaseApp, "Events", void 0);
export default BaseApp;
