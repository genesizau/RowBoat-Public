const Discord = require('discord.js');
module.exports={
    name:"purge",
    description:"Deletes Messages Automaticaly!",
    category:"moderation",
    usage:"&clear <amout of messages>",
    run: async (bot, message, args)=>{
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Your role dosent have manage messages permissions!")
        if(!args[0]) return message.reply('How Many Message Do You Want to clear?')
        if(parseInt(args[0]) > 99) return message.reply("You Cannot delete more than 99 messages at a time!")

        message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
            message.channel.send(`Cleared ${args[0]} messages!`);
        }).catch((err) => {
            return message.reply("An Error Has Occured! Lets Fix This");
        })
    }
}
