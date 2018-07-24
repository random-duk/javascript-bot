const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const fetch = require('node-fetch');

client.on('ready', () => {
  console.log('Ducky logged in!');
});

client.on('message', msg => {
  if (msg.content === '!duck') {
    fetch('https://api.random-d.uk/random').then((result) => {
      const embed = new RichEmbed()
      .setTitle('A duck in JS for you!')
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setImage(result.body.url)
      .setFooter(result.body.message);
            
      msg.channel.send({ embed });
    }).catch(err => console.error(err));
  }
});

client.login('BOT_TOKEN');
