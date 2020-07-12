const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'stats',
    description: 'The Bots Statistics',
    category: 'info',
    run: async(bot,message,args)=>{
        const StatEmbed = new MessageEmbed()
        .setTitle('My Stats!')
        .setColor(0x00000)
        .setDescription(`Im In ${bot.guilds.cache.size} Servers Hooray!`)
        message.channel.send(StatEmbed)
    }
}