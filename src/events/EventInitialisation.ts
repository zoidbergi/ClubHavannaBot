import { Client } from "discord.js";
import { onInteraction } from "./eventhooks/onInteraction";
import { onMessageCreated } from "./eventhooks/onMessage";

export const AttachEvents = async (client: Client): Promise<void> => {
  console.log(`Attaching Slash Commands...`);

  //Slash Command Event
  client.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  console.log(`Attaching Messages...`);

  //Bot mentions
  client.on(
    "messageCreate",
    async (message) => await onMessageCreated(message, client)
  );
}