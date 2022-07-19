
import { Client, DMChannel, TextChannel } from "discord.js";
import { getBirthdayList } from "../database/birthdayQueries"

let lastAnnouncedBirthdayName: string;

export async function announceBirthday(client: Client) {
    const result = await getBirthdayList();

    if (result === undefined || result === null) {
        return;
    }

    result.forEach(entry => {
        if (lastAnnouncedBirthdayName !== entry.name) {
            let date = new Date(entry.birthday);
            if (isToday(date)) {
                const channel = client.channels.cache.find(ch => ch.id === '994584449415139418'); //994584449415139418 test channel 508675397727158283 real channel
                if (channel?.isText()) {
                    const sendChannel = channel as TextChannel;
                    const party = client.emojis.cache.find(emoji => emoji.name === "Pepega");
                    const message: string = '@everyone' + ' ${entry.name} hat heute Geburtstag! WOO ' + party?.toString();
                    sendChannel.send(message);
                    lastAnnouncedBirthdayName = entry.name;
                }
            }
        }
    });
}

const isToday = (someDate: Date) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}
