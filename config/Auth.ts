import { Auth } from "./interfaces/Auth";
import { GatewayIntentBits } from "discord.js";

export const AuthConfig: Auth = {
  // this token will not work for you!
  token:
    "MTAxNjM3NjQ1MzI0OTYzNDM1NQ.Gprku-.x8NlUj9MkoMqD2HhalX7rq1SmJ8n_UleZ-3h0c",
  options: {
    intents: [GatewayIntentBits.GuildBans],
  },
  sharded: true,
};
