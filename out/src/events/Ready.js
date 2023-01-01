var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseApp from "../BaseApp.js";
import ClientEvents from "../decorators/ClientEvents.js";
class ReadyEvent {
    constructor() { }
    on() {
        console.log("on method called");
        BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.INFO, "Discord Bot is ready!", `Username: ${BaseApp.Client.user?.tag}`);
    }
}
__decorate([
    ClientEvents.bind(BaseApp.Events.DiscordEvents.READY, BaseApp.Events.EventTypes.ONCE)
], ReadyEvent.prototype, "on", null);
export default ReadyEvent;
