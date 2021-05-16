const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "y!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "Dynox Eğlence Menüsü",
      `
✨ **+fbi** : FBİ Gelir.
✨ **+token** : Botun Tokenini Görürsünüz.
✨ **+atam** : Dene ve Gör Reis.
✨ **+vine** : Komik Paylaşımlar.`
    )
    .addField(
      "**» Davet Linki**",
      " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=824603742510120990&permissions=8&scope=bot)"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/823651466618863637/825081475887529994/standard_1.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "eğlence",
  description: "Eğlence Komutları Gösterir."
};
