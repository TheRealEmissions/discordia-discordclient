import { AuthConfig } from "../config/Auth.js";
import BaseApp from "./BaseApp.js";

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

    this.importEvents();

    try {
      await this.login();
    } catch (error) {
      BaseApp.Events.getEventEmitter().emit(
        BaseApp.Events.GeneralEvents.ERROR,
        error
      );
    }

    console.log("testing, logged in");
  }

  async importEvents() {
    const readyEvent = await import("./events/Ready.js");
    this.events.push(new readyEvent.default());
  }

  async login() {
    await this.getClient().login(AuthConfig.token);
  }
}

export default App;
