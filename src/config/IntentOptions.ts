import { IntentsString, Intents } from 'discord.js';

export const intentSetting = new Intents();
intentSetting.add(Intents.FLAGS.GUILDS);
intentSetting.add(Intents.FLAGS.GUILD_MESSAGES);

// export const IntentOptions: IntentsString = "GUILDS";
