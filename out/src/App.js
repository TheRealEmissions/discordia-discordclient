import { AuthConfig } from "../config/Auth.js";
import BaseApp from "./BaseApp.js";
class App extends BaseApp {
    events = [];
    constructor() {
        super();
    }
    async init() {
        BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.INFO, "Discord Client Loaded");
        this.importEvents();
        try {
            await this.login();
        }
        catch (error) {
            BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.USER_ERROR, error);
        }
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
