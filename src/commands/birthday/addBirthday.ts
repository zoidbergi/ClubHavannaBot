import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { addBirthday, checkUserExsits, updateBirthday } from '../../database/birthdayQueries';
import dateToString from './formatDate';

const addBirthdayCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('birthdayset')
    .setDescription('Set a birthday')
    .addStringOption((option) => option
      .setName('birthday')
      .setDescription('Date of Birthday, Please use DD.MM.YYYY format.')
      .setRequired(true)),
  run: async (interaction) => {
    await interaction.deferReply();

    const { user } = interaction;
    // const name = interaction.options.getMember("name", true);
    const birthday = interaction.options.getString('birthday', true);
    const userName = interaction.user.username;

    // Parse birthdate
    const parts = birthday.split('.');
    const dateParsed = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    // console.log(dateParsed.toISOString());
    if (dateParsed.toDateString() === 'Invalid Date') {
      interaction.editReply('Wrong Date Format Idiot!');
      return;
    }

    // Check for user exist before adding and update instead
    const checkExist = await checkUserExsits(userName);
    if (checkExist === undefined || checkExist.name !== userName) {
      await addBirthday(userName, dateParsed.toISOString());
    } else {
      await updateBirthday(userName, dateParsed.toISOString());
    }

    // Fetch created entry and reply
    const result = await checkUserExsits(userName);
    if (result === undefined) {
      interaction.editReply('Fuck: I shit my pants.');
      return;
    }

    const readableDate = dateToString(new Date(result.birthday));

    const embedReply = new MessageEmbed();
    embedReply.setTitle('Added');
    embedReply.setDescription('Birthday');
    embedReply.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    embedReply.addField(result.name, readableDate, true);
    embedReply.setFooter({
      text:
        'I will remember this birthday!',
    });

    await interaction.editReply({ embeds: [embedReply] });
  },
};

export default addBirthdayCommand;
