const {MessageEmbed} = require('discord.js')
module.exports={
    name: 'poll',
    description: 'Yes Or No Poll!',
    category: 'fun',
    usage: '<poll question>',
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("ADMINISTATOR")) return message.channel.send('You Do Not Has Admin!')
        const channel = message.mentions.channels.first()||message.guild.channels.cache.get(args[0])
        if(!channel){
            return message.channel.send('You Did Not Mention or Give Id of channel you want poll to be sent!')
        }
        let question = message.content.slice(bot.prefix.length+5+channel.id.length+3)
        if(!question){
            return message.channel.send('You Didnt Specify A Question To The Poll?')
        }
        const PollEmbed = new MessageEmbed()
        .setTitle('New Poll!')
        .setDescription(question)
        .setFooter(`${message.author.username} created this poll At`)
        .setTimestamp()
        let msg = await bot.channels.cache.get(channel.id).send(PollEmbed)
        await msg.react('👍')
        await msg.react('👎')
    }
}