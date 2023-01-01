import { AuthConfig } from "../config/Auth.js";
import BaseApp from "./BaseApp.js";
import FS from "fs-extra-promise";
class App extends BaseApp {
    events = [];
    constructor() {
        super();
    }
    async init() {
        BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.INFO, "Discord Client Loaded");
        await this.importEvents();
        try {
            await this.login();
        }
        catch (error) {
            BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.USER_ERROR, error);
        }
    }
    async importEvents() {
        const files = await FS.readdirAsync("./src/events");
        for (const file of files) {
            if (!file.endsWith(".js"))
                continue;
            const name = file.split(".")[0];
            await this.pushEvent(name);
        }
    }
    async pushEvent(name) {
        const event = await import(`./events/${name}.js`);
        this.events.push(new event.default());
    }
    async login() {
        await this.getClient().login(AuthConfig.token);
    }
}
export default App;
