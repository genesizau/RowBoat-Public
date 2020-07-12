const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ad",
  description: "Advertise your server",
  category: "fun",
  run: async (bot, message, args) => {
    let Str = message.content.slice(bot.prefix.length + 2 + 1);
    if (!args[0])
      return message.channel.send(`You did not specify your advert!`);
        const Embed = new MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle(`New advertisement from ${message.author.tag}!`)
          .setDescription(Str)
          .setColor(`BLUE`)
          message.channel.send(Embed)
  },
};