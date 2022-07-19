import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { removeBirthday } from '../../database/birthdayQueries';

export const removeBirthdayCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('birthdayremove')
    .setDescription('Removes your birthday.'),
  run: async (interaction) => {
    await interaction.deferReply();

    const { user } = interaction;
    const userName = interaction.user.username;

    const result = await removeBirthday(userName);

    if (result === undefined || result === null) {
      interaction.editReply('Couldnt find shit');
      return;
    }

    const embedReply = new MessageEmbed();
    embedReply.setTitle('Removed');
    embedReply.setDescription('Birthday');
    embedReply.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    await interaction.editReply({ embeds: [embedReply] });
  },
};
