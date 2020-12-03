const { MessageEmbed } = require("discord.js")

module.exports.execute = async function(bot, message, args) {
    try {
    await message.channel.send(
        new MessageEmbed()
        .setTitle("status")
        .addField(`uso da cpu:`, `${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%`, true)
        .addField(`uso da ram:`, `${((process.memoryUsage().rss / 1024 / 1024).toFixed(2))} MB`, true)
        .setFooter(`comando executado por: ${message.author.tag}`)
    )
    } catch(e) {
        await message.reply(`:x: desculpa..mas aconteceu um erro!,\n \`\`\`${e}\`\`\``)
    } 
}

module.exports.command = {
    name: "status",
    aliases: ['stats']
}