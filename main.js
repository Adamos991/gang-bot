const Discord = require('discord.js');

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('GangBot is online!');
});

client.on('message', message =>{
    if(message.author.bot) return;
    
    if(message.content.includes('https://media.discordapp.net/attachments/716405122539978805/861028595198722098/received_493679925067586.gif') || message.content.includes('https://media.discordapp.net/attachments/784164015122546748/862044273598529536/received_493679925067586.gif')) {
        message.delete();
    } else if(message.member.roles.cache.has('874796496166469642')) {
        message.channel.send('Shut the fuck up pear');
    }
    return;
});


client.login('ODc1MTI0Nzk5MTE3MDkwOTA4.YRQ9ew.MZk-Z4ok71FpPAI7QuuSOyKFOJY');