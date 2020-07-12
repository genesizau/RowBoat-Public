const Discord = require('discord.js');

module.exports={
    name: "profile",
    description: "shows your profile",
    category: "info",
    usage: "<prefix>profile",
    run: async(bot, message, args) => {
    user = message.author;

    if (message.mentions.users.size > 1) { return message.reply("Cannot get userinfo of multiple users."); }
    else if (message.mentions.users.size > 0) { user = message.mentions.users.array()[0]; }

    gamename = "No Game"; gamestream = "Not Streaming";
    if (user.presence.game) {
        gamename = user.presence.game.name;
        gamestream = user.presence.game.streaming;
    }

    let embed = new Discord.MessageEmbed()
        .setTitle(`${user.username}'s Profile`)
        .setDescription(`Seem's pretty noice`)
        .setColor(0x157f87)
        .setThumbnail(user.avatarURL)
        .addField(":id: ID", user.id, true)
        .addField("Tag", user.tag, true)
        .addField(":clock9: Created", `${user.createdAt}`, true)
        .addField(":robot: Is Bot?", user.bot, true)
        .addField(":video_game: Game", "**Name:** " + gamename + "\n**Streaming:** " + gamestream, true)
        .addField("Status", user.presence.status, true);

    message.channel.send(embed);
}
}