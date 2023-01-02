import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency, Dependencies } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import Discord from "discord.js";
import { AuthConfig } from "../config/Auth.js";

abstract class BaseApp extends HeadFile {
  constructor() {
    super();
  }

  type = Dependency.DISCORD_CLIENT;
  name: string = "Discord Client";
  load = true;

  @Dependencies.inject(Dependency.EVENTS)
  static Events: typeof Events;

  static readonly Client = new Discord.Client(AuthConfig.options);
  getClient() {
    return BaseApp.Client;
  }

  static readonly Rest = new Discord.REST({ version: "10" }).setToken(
    AuthConfig.token
  );
  getRest() {
    return BaseApp.Rest;
  }

  abstract init(): void;
  getDependencies(): Dependency[] {
    return [Dependency.EVENTS];
  }
}

export default BaseApp;
