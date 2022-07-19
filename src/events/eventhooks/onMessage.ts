import { Client, Message } from 'discord.js';
import { randomBigLetter } from '../../messages/randomBigLetters';
import { generateCopyPastaReply } from '../../messages/replyWithCopypasta';

export const onMessageCreated = async (message: Message, client: Client) => {
  if (!message.author.bot) {
    const messageContent = message.content;

    // stupid thing
    if (message.author.id == '448135048021934080' && !messageContent.includes('/')) {
      if (Math.random() < 0.1) {
        const fivehead = client.emojis.cache.find((emoji) => emoji.name === '5Head');
        const reply: string = `${randomBigLetter(messageContent)} ${fivehead?.toString()}`;
        await message.reply(reply);
      }
    }

    // bot mentioned
    if (messageContent.includes('@993926727275397160')) {
      const reply = generateCopyPastaReply();
      await message.reply(reply);
    }
  }
};
