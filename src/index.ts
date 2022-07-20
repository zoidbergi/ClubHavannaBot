import * as dotenv from 'dotenv';
import { Client } from 'discord.js';
import intentSetting from './config/IntentOptions';
import onReady from './events/onReady';

(async () => {
  dotenv.config();
  const BOT = new Client({ intents: intentSetting });
  BOT.on('ready', async () => onReady(BOT));
  await BOT.login(process.env.BOT_TOKEN);
})();
