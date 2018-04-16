const discord = require('discord.js');
const client = new discord.Client();
const request = require('snekfetch');

client.on('ready', () => {
    console.log('Ducky logged in!');
}
    );

client.on('message', msg => {
    if (msg.content === '!duckjs') {
        request.get('https://api.random-d.uk/random').then((result) => {
            const embed = new discord.RichEmbed().setTitle('A duck in JS for you!').setAuthor(msg.author.username, msg.author.avatarURL).setImage(result.body.url).setFooter(result.body.message);
            msg.channel.send({embed});
        });
        }
});

client.login('token)