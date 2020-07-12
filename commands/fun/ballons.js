const { MessageEmbed } = require('discord.js')
module.exports={
    name: "ballons",
    description: "Shows GiF of ballons!",
    category: "fun",
    usage: "<prefix>ballons",
    run: async(bot, message, args) => {
        const BallonEmbed = new MessageEmbed()
        .setTitle('YAY BALLONS!')
        .setImage('https://i.gifer.com/77Bs.gif')
        .setFooter('YAY BALLONS THEY ARE FUN (cringe xD)')
        .setTimestamp()
        message.channel.send(BallonEmbed)
    }
}