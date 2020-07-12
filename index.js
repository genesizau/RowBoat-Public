const {
  Collection,
  Client,
  Discord,
  MessageEmbed
} = require("discord.js");
const fs = require("fs");
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

//console chatter
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.cache.get("730102630570917970").send(x.join(" "));
});

bot.on("message", async (message) => {
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
  if (!message.guild) return;
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