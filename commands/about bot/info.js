const { MessageEmbed } = require('discord.js');
const { version } = require('../../package.json');
const  { discordjs } = require('../../package.json');
const { utils } = require('../../functions.js');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');
module.exports={
    name: "info",
    description: "Information About Bot",
    category: "about bot",
    run: async(bot,message,args) =>{
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
        .setThumbnail(bot.user.displayAvatarURL())
        .setColor(message.guild.me.displayHexColor || 'BLUE')
        .addField('General', [
            `** ➤ Bot:** ${bot.user.tag} (${bot.user.id})`,
            `** ➤ Commands:** ${bot.commands.size}`,
            `** ➤ Servers:** ${bot.guilds.cache.size.toLocaleString()}`,
            `** ➤ Members:** ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
            `** ➤ Channels:** ${bot.channels.cache.size.toLocaleString()}`,
            `** ➤ Creation Date:** ${utc(bot.user.createdTimestamp).format('Do MMM, YYYY, HH:mm:ss')}`,
            `** ➤ Node.js:** ${process.version}`,
            `** ➤ Version:** v${version}`,
            `** ➤ Discord.js:** v12.2.0`,
            '\u200b'
        ])
        .addField('System', [
            `** ➤ Platform** ${process.platform.toUpperCase()}`,
            `** ➤ Uptime:** Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`,
            `** ➤ CPU:**`,
            `\u3000 Cores: ${os.cpus().length}`,
            `\u3000 Model: ${core.model}`,
            `\u3000 Speed: ${core.speed}MHz`

        ])
        .setTimestamp();

        message.channel.send(embed);
    }
}