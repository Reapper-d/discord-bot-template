# discord-bot-template
isso é um template super simples de um bot feito com javascript usando o [discord.js](https://discord.js.org/#/) 
## primeiros passos
antes de tudo,você deve instalar as dependencias,se você clonou esse repositório,basta digitar no seu terminal
```bash
npm install
```
você pode olhar o package.json para ver as dependencias usadas também! e caso você não tenha o node instalado na sua máquina, [clique aqui pra instalar!](https://nodejs.org/en/) você tambem deve ir no arquivo bot.json e alterar umas coisas.
```json
{
"prefix":"!",
"token":"tokenDoseuBot"
}
```
o **"prefix"** será o prefixo usado para o seu bot executar comandos,você pode trocar pra qualquer outro que você queira,já o **"token"** é onde vai o token do seu bot,ele é necessário pro seu bot se conectar com o discord (e lembre-se de não mostrar pra **ninguém** o seu token!)
## dando vida ao seu bot
digite no seu terminal: 
```bash
node index.js
```
se tudo der certo,o seu bot irá iniciar normalmente!
caso dê algum erro ou você precise de ajuda com alguma outra coisa,você pode pedir ajuda no servidor do discord [BlueFishLab!](https://discord.gg/9qmgASnBWZ)

não se esqueça de ler a documentação do [discord.js](https://discord.js.org/#/) para entender melhor essa livraria! 

## contribuições
qualquer pull request é bem-vindo,mas lembre-se que isso aqui é um template,não precisa ter vários comandos,mas se você acha que algo está faltando ou precisa melhorar,sua opinião é bem vinda!.

lembre-se de testar o código antes de fazer um pull request. 
