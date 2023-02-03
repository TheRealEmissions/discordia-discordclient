import { Dependency } from "ts-modular-bot-types";
import { AuthConfig } from "../config/internal/Auth.js";
import BaseApp from "./BaseApp.js";
import FS from "fs-extra-promise";
const preloadedFolders = [];
const preloadedHeadFiles = new Map();
const loaded = [];
class App extends BaseApp {
    events = [];
    constructor() {
        super();
    }
    async init() {
        if (!process.argv.includes("--sharded"))
            BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.INFO, "Discord Client Loaded");
        if (BaseApp.sharded) {
            BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.INFO, "Sharding is enabled - launching shards...");
            this.getShardManager().on("shardCreate", (shard) => {
                BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.INFO, `Shard ${shard.id} launched`);
            });
            await this.getShardManager().spawn();
        }
        else {
            if (process.argv.includes("--sharded")) {
                await this.loadFolders("./addons");
                await this.loadHeadFiles();
                for (const head of preloadedHeadFiles.values()) {
                    const entries = head.vars;
                    if (!entries)
                        continue;
                    for (const [target, key] of entries) {
                        const data = Reflect.getMetadata(key, target);
                        if (!data)
                            continue;
                        const val = data[key].injectWith;
                        if (val === null)
                            continue;
                        const dependency = preloadedHeadFiles.get(val);
                        if (!dependency)
                            continue;
                        Object.assign(target, { [key]: dependency });
                    }
                }
                await this.importEvents();
                try {
                    await this.login();
                }
                catch (error) {
                    BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.USER_ERROR, error);
                    throw error;
                }
                for (const head of preloadedHeadFiles.values()) {
                    if (!head.load)
                        continue;
                    const isLoadedAlready = await this.ensureDependency(head.type);
                    if (isLoadedAlready)
                        continue;
                    const loaded = await this.initModule(head.type);
                    if (!loaded) {
                        console.error(`Failed to load ${head.name}`);
                        continue;
                    }
                }
            }
            else {
                await this.importEvents();
                try {
                    await this.login();
                }
                catch (error) {
                    BaseApp.Events.getEventEmitter().emit(BaseApp.Events.GeneralEvents.USER_ERROR, error);
                    throw error;
                }
            }
        }
    }
    async initModule(dependency) {
        const head = preloadedHeadFiles.get(dependency);
        if (!head)
            return;
        const dependencies = head.getDependencies();
        for (const dependency of dependencies) {
            const isLoadedAlready = await this.ensureDependency(dependency);
            if (isLoadedAlready || dependency === Dependency.DISCORD_CLIENT)
                continue;
            const loaded = await this.initModule(dependency);
            if (!loaded) {
                return false;
            }
        }
        try {
            head.init();
        }
        catch (e) {
            return false;
        }
        loaded.push(dependency);
        return true;
    }
    async ensureDependency(dependency) {
        return loaded.includes(dependency);
    }
    async loadFolders(folder) {
        const subfolders = await FS.readdirAsync(folder);
        for (const folder in subfolders) {
            const isFolder = FS.statSync(`./addons/${subfolders[folder]}`).isDirectory();
            if (!isFolder) {
                delete subfolders[folder];
            }
        }
        preloadedFolders.push(...subfolders.filter((x) => x !== undefined));
        return true;
    }
    async loadHeadFiles() {
        for (const folder of preloadedFolders) {
            try {
                const headFile = (await import(`../../../${folder}/out/index.js`))
                    .default;
                if (!headFile.load)
                    continue;
                if (headFile.type === Dependency.DISCORD_CLIENT) {
                    preloadedHeadFiles.set(Dependency.DISCORD_CLIENT, this);
                }
                else {
                    preloadedHeadFiles.set(headFile.type, headFile);
                }
            }
            catch (e) {
                console.error(e);
                continue;
            }
        }
        return true;
    }
    async importEvents() {
        const files = await FS.readdirAsync("./addons/Discord Client/out/src/events");
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
if (process.argv.includes("--sharded")) {
    const app = new App();
    app.init();
}
