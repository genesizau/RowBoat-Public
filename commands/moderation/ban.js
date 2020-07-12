const {MessageEmbed} = require('discord.js')
module.exports={
    name: 'ban',
    description: 'Ban A specified user from the server!',
    category: 'moderation',
    usage: '<user id> <reason>',
    run: async(bot,message,args)=>{
        const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .ban({
            Reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            const BanEmbed = new MessageEmbed()
        .setTitle(`You Have Banned A Member!`)
        .setDescription(`You Have Banned The User ${bot.users.cache.get(user.id).tag} from This Server`)
        .setColor(`RANDOM`)
        .setTimestamp()
        message.channel.send(BanEmbed)
        message.channel.send('https://tenor.com/view/thor-banhammer-discord-banned-banned-by-admin-gif-12646581')
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
    }
}