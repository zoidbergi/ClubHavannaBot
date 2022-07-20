import { Intents } from 'discord.js';

const intentSetting = new Intents();
intentSetting.add(Intents.FLAGS.GUILDS);
intentSetting.add(Intents.FLAGS.GUILD_MESSAGES);

export default intentSetting;
