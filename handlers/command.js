const {
    readdirSync
} = require("fs");
module.exports = (bot) => {
    readdirSync("./commands/").map(dir => {
        const commands = readdirSync(`./commands/${dir}/`).map(cmd => {
            let pull = require(`../commands/${dir}/${cmd}`)
            console.log(`----------- Code By GenesizAu ------------------------`)
            console.log(``)
            console.log(`${pull.name} ON`)
            console.log(``)
            console.log(`----------- Code By GenesizAu ------------------------`)
            bot.commands.set(pull.name, pull)
            if (pull.aliases) {
                pull.aliases.map(p => bot.aliases.set(p, pull))
            }
        })
    })
}