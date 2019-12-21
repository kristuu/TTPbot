const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('with a ČKD Tatra T6B5', { type: 'PLAYING' }); //PLAYING / STREAMING / LISTENING / WATCHING
    client.user.setStatus('online') //online - user is online / idle - user is AFK / offline - user is offline or invisible / dnd - user is in Do Not Disturb
});

client.on('message', message => {
    if (message.guild === null) {
        //space for dm commands
    } else {
        if (message.content == 'ping?') {
            if (message.author.id == 179654608371712000) {
                message.react('❤️')
                message.channel.send("🏓")
                message.channel.send("*** Pong!***");
                } else {        
                    var a = ['no', 'leave me alone', 'ask another bot im busy', '*Ping Service 1x* has been added to your cart\nNew Total: € 6.90', 'noobs doesnt even have a ping', '**666 ms!** ***Burn in hell!***', 'GET LOST', 'im tired of you', 'idk', 'you get coal from me this christmas, only normal people get a ping present', 'This is a Premium feature! You are too poor to afford Premium of such cool bot!']
                    message.react('⛔')
                    message.channel.send(a[Math.floor(Math.random() * a.length)]);
                }
            }
        if (message.content == '/cmds') {
            message.channel.send('Due to budget cuts, this command has been disabled\nWe apologise for any inconvenience caused', {files: ['https://cdn.drawception.com/drawings/LrK4OWAvPQ.png']});
        }
        if (message.content == '/kevinreys') {
            message.channel.send('Idiot with bad grammar, currently working in WMP Roblox as Superintendant for the most inactive unit in the force. \n     */ Wikipedia /*');
        }
        if (message.content == '/ralfotr') {
            message.channel.send('Rightful owner of the well known TTP bot that provides real information across multiple Discord servers. Also known as a great developer in Roblox, specialising in development of public transport and urban infrastructure. \n     */ Wikipedia /*');
        }
        if (message.content.startsWith('/purge')) {
            if (message.member.hasPermission("ADMINISTRATOR")) {
                var delnum = message.content.split(" ");
                message.delete()
                message.channel.bulkDelete(parseInt(delnum[1]))
                if (parseInt(delnum[1]) > 100) {
                    message.reply("❗ You can only delete 100 or less messages at once").then(msg => {msg.delete(5000)}).catch()
                } else {
                    message.reply("Deleted **" + delnum[1] + "** messages!").then(msg => {msg.delete(5000)}).catch()
                }
            } else {
                message.channel.send('❗ Insufficient permissions');
            }
        }
    }
});

client.login(process.env.BOT_TOKEN);
