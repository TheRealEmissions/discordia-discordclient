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
    static Events;
    static Client = new Discord.Client(AuthConfig.options);
    getClient() {
        return BaseApp.Client;
    }
    static Rest = new Discord.REST({ version: "10" }).setToken(AuthConfig.token);
    getRest() {
        return BaseApp.Rest;
    }
    getDependencies() {
        return [Dependency.EVENTS];
    }
}
__decorate([
    Dependencies.inject(Dependency.EVENTS)
], BaseApp, "Events", void 0);
export default BaseApp;
