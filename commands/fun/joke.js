const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "joke",
  description: "Jokes! some might be offensive be carful",
  category: "fun",
  run: async (bot, message, args) => {
      let responses = [
        "",
        "",
        "",
        "",
        "What does the fat cow give you? homework..",
        "",
        "",
        "Pizza!",
        "What does the fat cow give you? homework...",

      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`JOKE TIME!!`)
        .setDescription(`**My Joke!**: \n${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    },
  };
