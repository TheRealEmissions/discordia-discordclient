import { Auth } from "./interfaces/Auth";
import { GatewayIntentBits, Partials } from "discord.js";
import YAML from "yaml";
import FS from "fs-extra-promise";
import { fileURLToPath } from "node:url";

const config = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Auth.yml", import.meta.url)),
    "utf8"
  )
);

export const AuthConfig: Auth = {
  ...config,
  options: {
    ...config.options,
    intents:
      config.intents?.map(
        (x: string) =>
          GatewayIntentBits[
            x
              .split("_")
              .map((x) => x[0] + x.substring(1).toLowerCase())
              .join("") as keyof typeof GatewayIntentBits
          ]
      ) ?? [],
    partials:
      config.partials?.map(
        (x: string) =>
          Partials[
            x
              .split("_")
              .map((x) => x[0] + x.substring(1).toLowerCase())
              .join("") as keyof typeof Partials
          ]
      ) ?? [],
  },
};
