module.exports.execute = async function(bot, message, args) {
try {
await message.channel.send(`:ping_pong: **pong! \`${bot.ws.ping} ms\`!**`)
} catch(e) {
    await message.reply(`:x: desculpa..mas aconteceu um erro!,\n \`\`\`${e}\`\`\``)
}
}
//preste atenção aqui!
module.exports.command = {
    name: "ping", //o nome do comando
    aliases: ['latencia', 'p'] //alternativas do comando, nota: aqui precisa ser um array,se não,não vai funcionar
}