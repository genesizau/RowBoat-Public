const { MessageEmbed, Message } = require('discord.js');
module.exports={
    name: "about",
    description: "Shows Info",
    category: "about bot",
    run: async(bot,message,args) => {
        const AboutEmbed = new MessageEmbed()
        .setTitle('RowBoat')
        .setDescription('Coded By Thanos (GenesizAu) as a part of Neon Dev.')
        .addField('Thanks To:', 'Thanks To These People The Bot is Made') 
        .addField('CasualGamers (Deon)', '[Discord](https://discord.gg/zhp3vnq)')
        .addField('SalvageDev (YT)', '[Youtube](https://www.youtube.com/channel/UC7-pjRSGoNEMoIujwOH2Mhw)')
        .addField('DBD AND MORE (YT)', '[Youtube](https://www.youtube.com/channel/UClAFgotVhZ1DGvN57EMY7fA)')
        .setFooter('Neon Dev.')
        .setColor('RANDOM')
        message.channel.send(AboutEmbed)
    }
}