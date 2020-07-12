const {MessageEmbed} = require('discord.js')
module.exports={
    name: 'kick',
    description: 'Kick A specified user from the server!',
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
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick(
            Reason = 'They Were Bad'
          )
          .then(() => {
            // We let the message author know we were able to kick the person
            const KickEmbed = new MessageEmbed()
        .setTitle(`You Have Kicked A Member!`)
        .setDescription(`You Have Kicked The User ${bot.users.cache.get(user.id).tag} from This Server`)
        .setColor(`RANDOM`)
        .setTimestamp()
        message.channel.send(KickEmbed)
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
    }
}