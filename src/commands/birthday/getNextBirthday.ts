import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { getBirthdayList } from '../../database/birthdayQueries';
import dateToString from './formatDate';

const getNextBirthday: Command = {
  data: new SlashCommandBuilder()
    .setName('nextBirthday')
    .setDescription('Gets next Birthday'),
  run: async (interaction) => {
    await interaction.deferReply();

    const result = await getBirthdayList();

    if (result === undefined || result === null) {
      interaction.editReply('Couldnt find shit');
      return;
    }

    const today = new Date();
    let nextBirthday = { name: 'I bims the Zukunft', birthday: '10/22/3000' };
    result.forEach((element) => {
      const date = new Date(element.birthday);
      if (date >= today && (date < new Date(nextBirthday.birthday))) {
        nextBirthday = element;
      }
    });

    const embedReply = new MessageEmbed();
    embedReply.setTitle('Next Brithday');
    const readableDate = dateToString(new Date(nextBirthday.birthday));
    embedReply.addField(nextBirthday.name, readableDate, true);
    embedReply.setFooter({
      text:
        'Der isch als nägschtes dra',
    });

    await interaction.editReply({ embeds: [embedReply] });
  },
};

export default getNextBirthday;
