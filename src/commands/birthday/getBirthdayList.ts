import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, MessagePayload } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { getBirthdayList } from '../../database/birthdayQueries';
import { dateToString } from './formatDate';

export const getBirthdayListCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('birthdaylist')
    .setDescription('Gets all Birthdays'),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;

    const result = await getBirthdayList();

    if (result === undefined || result === null) {
      interaction.editReply('Couldnt find shit');
      return;
    }

    const embedReply = new MessageEmbed();
    embedReply.setTitle('Brithday List');
    embedReply.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    result.forEach((element) => {
      const readableDate = dateToString(new Date(element.birthday));
      embedReply.addField(element.name, readableDate, true);
    });

    console.log(result);
    await interaction.editReply({ embeds: [embedReply] });
  },
};
