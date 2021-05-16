const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Dynox Kullanıcı Menüsü',`
👥 **+profil** : Kullanıcı Bilginizi Görürsünüz.
👥 **+avatar** : Avatarınıza Bakarsınız.
👥 **+say** : Sunucudaki Üye Sayısını Gösterir.
👥 **+afk** : AFK Olma Komutudur.
👥 **+yetkilerim** : Sunucudaki Yetkinize Bakarsınız.
👥 **+ping** : Botun Pingine Bakarsınız.
👥 **+istatistik** : Botun İstatistiklerine Bakarsınız.
👥 **+davet** : Botu Davet Edersiniz.`)
.addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=824603742510120990&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/823651466618863637/825081475887529994/standard_1.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};