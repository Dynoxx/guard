const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const DynoxEMBED = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**  » Dynox**")
.setImage("https://cdn.discordapp.com/attachments/823651466618863637/825081475887529994/standard_1.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZuP9hg9bpK)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=824603742510120990&permissions=8&scope=bot)** **•**
Bir komut hakkında detaylı __yardım için__: **+yardım**`)

.addField('**• Komutlar**',' Botun Tüm Komutları Aşağıda Bulunmaktadır.')
.addField('> +moderasyon ',' 🔰 Moderasyon komutları')
.addField('> +kullanıcı ',' 👥 Kullanıcı komutları')
.addField('> +eğlence','  ✨ Eğlence Komutları')
return message.channel.send(DynoxEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};