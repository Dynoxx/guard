const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("GOLD")
    .addField("» **Botun Sahibi**", "<@!529189384290041867>")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/ZuP9hg9bpK)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=824603742510120990&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/823651466618863637/825081475887529994/standard_1.gif")
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(chrome);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};