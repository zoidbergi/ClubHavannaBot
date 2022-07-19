import { Client, Message } from "discord.js";
import { randomBigLetter } from "../../messages/randomBigLetters";
import { generateCopyPastaReply } from "../../messages/replyWithCopypasta";

export const onMessageCreated = async (message: Message, client: Client) => {
  console.log("Message Created:");
  console.log(message.content);
  if (!message.author.bot) {
    let messageContent = message.content;

    //stupid thing
    if (message.author.id == "193383265661353984") {
      const fivehead = client.emojis.cache.find(emoji => emoji.name === "5Head");
      const reply: string = randomBigLetter(messageContent) + ' ' + fivehead?.toString();
      await message.reply(reply);
    }

    //bot mentioned
    if (messageContent.includes('@993926727275397160')) {
      const reply = generateCopyPastaReply();
      await message.reply(reply);
    }
  }
};
