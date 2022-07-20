import { Client, CommandInteraction } from 'discord.js';
import onInteraction from './eventhooks/onInteraction';
import onMessageCreated from './eventhooks/onMessage';
import announceBirthday from '../messages/announceBirthday';

async function periodicBirthdayCheck(client: Client) {
  const now = new Date();
  const night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // the next day, ...
    0,
    0,
    0, // ...at 00:00:00 hours
  );
  const msToMidnight = night.getTime() - now.getTime();

  setTimeout(() => {
    announceBirthday(client); //      <-- This is the function being called at midnight.
    periodicBirthdayCheck(client); //      Then, reset again next midnight.
  }, msToMidnight);
}

const AttachEvents = async (client: Client): Promise<void> => {
  // Slash Command Event
  client.on(
    'interactionCreate',
    async (interaction) => onInteraction(interaction as CommandInteraction),
  );

  // Bot mentions
  client.on(
    'messageCreate',
    async (message) => onMessageCreated(message, client),
  );

  await periodicBirthdayCheck(client);
};

export default AttachEvents;
