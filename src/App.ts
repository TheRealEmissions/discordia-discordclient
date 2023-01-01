import { AuthConfig } from "../config/Auth.js";
import BaseApp from "./BaseApp.js";
import FS from "fs-extra-promise";

class App extends BaseApp {
  events: any[] = [];
  constructor() {
    super();
  }

  async init(): Promise<void> {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.GeneralEvents.INFO,
      "Discord Client Loaded"
    );

    await this.importEvents();

    try {
      await this.login();
    } catch (error) {
      BaseApp.Events.getEventEmitter().emit(
        BaseApp.Events.GeneralEvents.USER_ERROR,
        error
      );
    }
  }

  async importEvents() {
    const files = await FS.readdirAsync("./src/events");
    for (const file of files) {
      if (!file.endsWith(".js")) continue;
      const name = file.split(".")[0];
      await this.pushEvent(name);
    }
  }

  async pushEvent(name: string) {
    const event = await import(`./events/${name}.js`);
    this.events.push(new event.default()); // nvm im blind
    // yes you are
    // and you're gay
  }
  // why are you using my jokes?
  // because I want to
  // gay LOL

  async login() {
    await this.getClient().login(AuthConfig.token);
  }
}

export default App;
