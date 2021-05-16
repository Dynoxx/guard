const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "+";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Dynox Moderasyon Menüsü",`
🔰 **+reklam** : Reklam Engeli Açarsınız.
🔰 **+küfür** : Küfür Engeli Açarsınız.
🔰 **+otorol** : Otorol Ayarlarsınız.
🔰 **+sayaç** : Sayaç Rakamını Seçersiniz.
🔰 **+sayaç-kanal-ayarla** : Sayaç Kanalını Seçer.
🔰 **+mod-log** : Mod-Log Kanalı Seçersiniz.
🔰 **+yavaş-mod** : Yavaş Mod Ayarlarsınız.
🔰 **+sa-as** : Sa-As Mesajını Açar..
🔰 **+sil** : Belli Miktarda Mesaj Siler.
🔰 **+oylama** : Oylama Yaparsınız.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=824603742510120990&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/823651466618863637/825081475887529994/standard_1.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`,message.author.avatarURL())
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon",
  description: "Eğlence Komutları Gösterir."
};
