const {
  Collection,
  Client,
  Discord,
  MessageEmbed
} = require("discord.js");
const fs = require("fs");
const createCaptcha = require('./captcha.js')
const {
  badwords
} = require("./data.json");
const genesizau = require('./whitelist.json');
const casual = require('./whitelist.json')
const {
  token,
  default_prefix,
} = require("./config.json");
const db = require("quick.db");
const bot = new Client({
  disableEveryone: true,
});
const ms = require("ms");
const moment = require("moment");
bot.commands = new Collection();
bot.prefix = default_prefix;
prefix = default_prefix;
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});
bot.on("ready", () => {
  bot.user.setActivity(`${prefix}help | Helping ${bot.guilds.cache.size}`, {
    type: "STREAMING",
    url: "https://twitch.tv/genesizauz",
  });
  console.log(`Logged in as ${bot.user.username}`);
});

bot.on('guildMemberAdd', async member => {
  const captcha = await createCaptcha();
  try {
      const msg = await member.send('You have 60 seconds to solve the captcha', {
          files: [{
              attachment: `C:/Users/Smart-PC/Documents/GitHub/rowboat/captchas/${captcha}.png`,
              name: `${captcha}.png`
          }]
      });
      try {
          const filter = m => {
              if(m.author.bot) return;
              if(m.author.id === member.id && m.content === captcha) return true;
              else {
                  m.channel.send('You entered the captcha incorrectly.');
                  return false;
              }
          };
          const response = await msg.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time']});
          if(response) {
              await msg.channel.send('You have verified yourself!');
              await member.roles.add(member.guild.roles.cache.find(x => x.name == "Verified"), "Reason");
              await fs.unlinkSync(`${__dirname}/captchas/${captcha}.png`)
          } 
      }
      catch(err) {
          console.log(err);
          await msg.channel.send('You did not solve the captcha correctly on time.');
          await member.kick();
          await fs.unlinkSync(`${__dirname}/captchas/${captcha}.png`)
                  .catch(err => console.log(err));
      }
  }
  catch(err) {
      console.log(err);
  }
});

//console chatter
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.cache.find(
      (ch) => ch.name === "general").send(x.join(" "));
});

bot.on("message", async (message) => {
  
  if (!message.guild) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    let confirm = false;
    //NOW WE WILL USE FOR LOOP
    var i;
    for (i = 0; i < badwords.length; i++) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
    }

    if (confirm) {
      message.delete();
      const BadEmbed = new MessageEmbed()
      .setTitle('You Have Said A No No Word!')
      .setDescription(' We Have Had To Delete That No No Word Sorry :)')
      .setThumbnail(message.author.displayAvatarURL())
      .setAuthor(message.author.tag)
      .setColor('BLUE')
      .setTimestamp()
      return message.channel.send(BadEmbed)
    }
  }
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return message.channel.send("What Command Do You want to use?")
  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  if (command) {
    if (command.timeout) {
      if (Timeoufhas(`${message.author.id}${command.name}`)) {
        return message.reply(
          `You Can Only Use that command every ${ms(command.timeout)}!`
        );
      } else {
        Timeout.add(`${message.author.id}${command.name}`);
        setTimeout(() => {
          Timeout.delete(`${message.author.id}${command.name}`);
        }, command.timeout);
      }
    }
    command.run(bot, message, args);
  }
});
bot.login(token);