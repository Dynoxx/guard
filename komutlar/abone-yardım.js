const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Dynox Abone Rol Menüsü',`
🔔 **+abone-yetkili-rol** : Abone Yetkilisini Seçer.
🔔 **+abone-rol** : Vericeğiniz Rolü ayarlarsınız.
🔔 **+abone-log** : Log mesajınn gitceği yer seçilir.
🔔 **+abone** : Abone Rolü verme komutudur.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=824603742510120990&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/823651466618863637/825081475887529994/standard_1.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-yardım'],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};