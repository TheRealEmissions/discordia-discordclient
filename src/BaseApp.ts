import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency, Dependencies } from "ts-modular-bot-types";
import Events from "events-types";
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

  abstract init(): void;
  getDependencies(): Dependency[] {
    return [Dependency.EVENTS];
  }
}

export default BaseApp;
