import { Client } from "discord.js";
import { onInteraction } from "./eventhooks/onInteraction";

export const AttachEvents = async (client: Client): Promise<void> => {
    console.log(`Attaching Events...`);

    //Slash Command Event
    client.on(
        "interactionCreate",
        async (interaction) => await onInteraction(interaction)
      );

    //Bot mentions
    client.on(
      "messageCreated",
      async (interaction) => await onInteraction(interaction)
    );
    return;
}