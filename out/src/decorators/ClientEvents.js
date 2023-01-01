import BaseApp from "../BaseApp.js";
class ClientEvents {
    static bind(eventName, type = BaseApp.Events.EventTypes.ON) {
        return (target, propertyKey, descriptor) => {
            switch (type) {
                case BaseApp.Events.EventTypes.ON:
                    BaseApp.Client.on(eventName, descriptor.value);
                    break;
                case BaseApp.Events.EventTypes.ONCE:
                    BaseApp.Client.once(eventName, descriptor.value);
                    break;
            }
        };
    }
}
export default ClientEvents;
