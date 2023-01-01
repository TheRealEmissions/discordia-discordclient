import { Auth } from "./interfaces/Auth";
import { GatewayIntentBits } from "discord.js";

export const AuthConfig: Auth = {
  // this token will not work for you!
  token:
    "NjA3MjU0MzU0ODQ3ODU4Njg4.GW7YJ1.vNSTNBDAk-5qiDv6KNjMYEqu1OAmGMGI4lSZJk",
  options: {
    intents: [GatewayIntentBits.GuildBans],
  },
};
