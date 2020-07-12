const Discord = require('discord.js')
const db = require('quick.db')
const prefix = '&';

module.exports={
    name: "buy",
    description: "The Store",
    category: "economy",
    run: async (bot, message, args) => {
    if(!message.content === prefix)return;  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [&buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [&buy nikes]\nCar: 800 [&buy car]\nMansion: 1200 [&buy mansion]\nNot Fully Working Yet")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}
}
