const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const prefix = '&';

module.exports={
    name: "work",
    description: "work for CASH",
    category: "economy",
    run: async (bot, message, args) => {
    if(!message.content === prefix)return;  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` ${message.author} You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic','Coder']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${message.author} You worked as a ${replies[result]} and earned ${amount} coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}
}