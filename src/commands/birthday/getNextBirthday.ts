import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { getBirthdayList } from '../../database/birthdayQueries';
import dateToString from './formatDate';

const getNextBirthday: Command = {
  data: new SlashCommandBuilder()
    .setName('birthdaynext')
    .setDescription('Gets next Birthday'),
  run: async (interaction) => {
    await interaction.deferReply();

    const result = await getBirthdayList();

    if (result === undefined || result === null || result.length === 0) {
      interaction.editReply('Couldnt find shit');
      return;
    }

    const today = new Date();
    // let nextBirthday = { name: 'niemand', birthday: '00' };
    let nextBirthdayName = 'niemand';
    let nextBirthdayDate = '00';
    function isBirthdayAfterToday(birthday: Date, todayDate: Date): boolean {
      if (birthday.getMonth() === todayDate.getMonth()) {
        return birthday.getDate() > todayDate.getDate();
      }
      return birthday.getMonth() >= todayDate.getMonth();
    }

    //  birthday list is already sorted by dd/MM so we can break on first occurrence
    for (let i = 0; i < result.length; i += 1) {
      const birthdayDate = new Date(result[i].birthday);
      if (isBirthdayAfterToday(birthdayDate, today)) {
        nextBirthdayDate = result[i].birthday;
        nextBirthdayName = result[i].name;
        break;
      }
      if (i === result.length - 1 && result[0] !== undefined) {
        //  NoBirthday found in this year. Take first list entry
        nextBirthdayName = result[0].name;
        nextBirthdayDate = result[0].birthday;
      }
    }

    const embedReply = new MessageEmbed();
    embedReply.setTitle('Next Brithday');
    const readableDate = dateToString(new Date(nextBirthdayDate));
    embedReply.addField(nextBirthdayName, readableDate, true);
    embedReply.setFooter({
      text:
        'Der isch als nägschtes dra',
    });

    await interaction.editReply({ embeds: [embedReply] });
  },
};

export default getNextBirthday;
