import * as dotenv from 'dotenv';
import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { onReady } from "./events/onReady";

(async () => {
    dotenv.config();
    const BOT = new Client({intents: IntentOptions});
    BOT.on("ready", async () => await onReady(BOT));
    await BOT.login(process.env.BOT_TOKEN);
})();