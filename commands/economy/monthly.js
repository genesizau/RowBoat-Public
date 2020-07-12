const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const prefix = '&';

module.exports={
    name: "monthly",
    description: "weekly alowance",
    category: "economy",
    run: async (bot, message, args) => {
  if(!message.content === prefix)return;  

  let user = message.author;
  let timeout = 2592000000;
  let amount = 1500;

  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${message.author} You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${message.author} You've collected your weekly reward of ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())


  }
}
}