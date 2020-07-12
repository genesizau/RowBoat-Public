const { MessageEmbed } = require('discord.js')
module.exports={
    name: "version",
    description: "Check Out The Bots Version",
    category: "info",
    usage: "<prefix>version",
    run: async(bot,message,args) => {
        const VersionEmbed = new MessageEmbed()
        .setTitle(' What Is The Bots Version Look Below! :arrow_double_down: ')
        .setDescription(`The Bots Version 2.0.0 We Are Still Creating Tho!`)
        .setFooter('2.0.0')
        .setTimestamp()
        message.channel.send(VersionEmbed)    
    }
}