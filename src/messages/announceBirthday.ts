import { Client, DMChannel, TextChannel } from 'discord.js';
import { ExplicitContentFilterLevels } from 'discord.js/typings/enums';
import assert from 'node:assert';
import { getBirthdayList } from '../database/birthdayQueries';
let lastAnnouncedBirthdayName: string;

export async function announceBirthday(client: Client) {
  const result = await getBirthdayList();

  if (result === undefined || result === null) {
    return;
  }

  result.forEach((entry) => {
    if (lastAnnouncedBirthdayName !== entry.name) {
      const date = new Date(entry.birthday);
      if (isBirthdayToday(date)) {
        const channel = client.channels.cache.find((ch) => ch.id === '508675397727158283'); // 994584449415139418 test channel 508675397727158283 real channel
        if (channel?.isText()) {
          const sendChannel = channel as TextChannel;
          const party = client.emojis.cache.find((emoji) => emoji.name === 'Pepega');
          const message: string = '@everyone' + ` ${entry.name} hat heute Geburtstag! WOO ${party?.toString()}`;
          sendChannel.send(message);
          lastAnnouncedBirthdayName = entry.name;
        }
      }
    }
  });
}

export const isBirthdayToday = (someDate: Date) => {
  const today = new Date();
  return someDate.getDate() == today.getDate()
        && someDate.getMonth() == today.getMonth();
};

