import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import { MessageEmbed, MessagePayload } from "discord.js"

export const addBirthday: Command = {
  data: new SlashCommandBuilder()
    .setName('Add a Birthday')
    .setDescription("Add a brithday to the registry")
    .addUserOption((option) =>
      option
        .setName("Name")
        .setDescription("The name of the person")
        .setRequired(true)
    )
    .addStringOption((option) =>
    option
      .setName("Birthday")
      .setDescription("Date of Birthday, Please use DD/MM/YY format.")
      .setRequired(true)
    )
  ,
  run: async (interaction) => {
    await interaction.deferReply();
    
    const { user } = interaction;
    const name = interaction.options.getMember("Name", true);
    const birthday = interaction.options.getString("Birthday", true);

	
	const embedExample = new MessageEmbed();
    embedExample.setTitle("Added Birthday");
    //embedExample.setDescription(name.toString());
    embedExample.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    embedExample.addField(name.toString(), birthday, true);
    embedExample.setFooter({
      text:
        "I will remember this birthday!",
    });

    await interaction.editReply({ embeds: [embedExample] });
  },
};