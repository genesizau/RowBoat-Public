const { MessageEmbed } = require('discord.js');
module.exports={
    name: "partners",
    description: "Shows Partners/Helpers!",
    category: "info",
    run: async(bot,message,args) => {
        const genesizau = ('https://www.youtube.com/channel/UCq4E31yUeIpBrRG6STjdc8Q')
        const silva = ('https://www.youtube.com/channel/UCSTESX7hifs_C5Sic-j8_0w')
        const casual = ('https://www.youtube.com/channel/UCc4DXnlRYu5uuap1umdaUxQ')
        const YoutubeEmbed = new MessageEmbed()
        .setTitle(' !Partners/Helpers! ')
        .setThumbnail(message.author.avatartURL)
        .setDescription(' !Partners/Helper!\n   Yeah BOI')
        .addField('GenesizAu (Creator of Bot)', `[GenesizAu](${genesizau})`)
        .addField('Silva Gaming (Friend Gave Ideas For Commands)', `[Silva Gaming](${silva})`)
        .addField('Casual Gamers (Helped With Code & Errors)', `[Casual Gamers](${casual})`)
        .setTimestamp()
        .setFooter(`${message.author.tag} Sent This Command!`)
        message.channel.send(YoutubeEmbed)
    }
}