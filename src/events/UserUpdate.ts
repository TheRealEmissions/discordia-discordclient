import BaseApp from "@src/BaseApp.js";
import ClientEvents from "@decorators/ClientEvents.js";
import { User } from "discord.js";

class UserUpdateEvent {
  @ClientEvents.bind(BaseApp.Events.DiscordEvents.USER_UPDATE)
  on(oldUser: User, newUser: User) {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.DiscordEvents.USER_UPDATE,
      oldUser,
      newUser
    );
  }
}
export default UserUpdateEvent;
