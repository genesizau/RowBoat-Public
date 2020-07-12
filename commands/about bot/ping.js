const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    category: 'about bot',
    description: 'Returns Latency and API Ping',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('🏓 Pinging...')
        const PingEmbed = new MessageEmbed()
        .setTitle('🏓 Pong! 🏓')
        .setDescription(`Your Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`)
        .setColor(0xFF00E1)
        .setTimestamp()
        message.channel.send(PingEmbed)
    }
}