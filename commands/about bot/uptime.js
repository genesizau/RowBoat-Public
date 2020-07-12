const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: "uptime",
    description: "Sends uptime for bot",
    category: "about bot",
    run: async (bot, message, args) => {
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;

        const UpEmbed = new MessageEmbed()
            .setTitle(`__Uptime:__`)
            .setDescription(`Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`)
            .setTimestamp()
            .setColor('#ff11ff')

        message.channel.send(UpEmbed)
    }
}