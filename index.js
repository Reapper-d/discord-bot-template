const { Client, Collection } = require("discord.js") //chamando o discord.js e as funções que vamos precisar
const { readdir } = require("fs")
const { token, prefix } = require("./bot.json") //chamando o arquivo json que tem alguns dados importantes

const bot = new Client() //declarando o client

bot.commands = new Collection()
bot.aliases = new Collection()

readdir("./commands", (err, files) => {
    if(err) return console.log(err) //se houver um erro,escreva no console
    let cmd = files.filter(f => f.split(".").pop() == "js")
    cmd.forEach((f, i) => {
        console.log(f) //escrevendo todos os arquivos encontrados
        let props = require(`./commands/${f}`) //puxando todos os arquivos encontrados
        bot.commands.set(props.command.name, props) //colocando na collection a propriedade "name" que tá no module.exports.command
        props.command.aliases.forEach(alias => {
            bot.aliases.set(alias, props.command.name) //colocando na collection a propriedade "aliases" que tá no module.exports.command
        })
    })
})

bot.on("ready", () => {
    console.log("to online parcero")
})

bot.on("message", async message => {
    if(message.author.bot || !message.content.startsWith(prefix) || message.channel.type == "dm") { //verificando se o autor é um bot,ou nao começa com o prefixo ou o comando foi executado na dm
        return;
    } else { //caso contrário
       var args = message.content.substring(prefix.length).split(" ")
       var cmd = args.shift().toLowerCase()
       var command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd)) //procurando o comando na coleção "commands",caso não tiver,procura na coleção "aliases"
       if(command) { //caso encontrar o comando
           message.channel.startTyping()
           command.execute(bot, message, args)
           message.channel.stopTyping()
       } else { //caso não encontrar o comando.
           console.log("comando inexistente...")
       }
    }
})

bot.login(token) //fazendo a conexão com o discord atraves do token (não mostre seu token pra ninguem!)
