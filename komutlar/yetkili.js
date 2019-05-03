const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Komutları")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Yetkili Komutları**", `;ban = İstediğiniz Kişiyi Sunucudan Banlar. \n;kick  = İstediğiniz Kişiyi Sunucudan Atar. \n;unban = İstediğiniz Kişinin Yasağını Açar. \n;sustur = İstediğiniz Kişiyi Susturur. \n;sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \n;oylama = Oylama Açar. \n;duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .setFooter('SlayerViper Bot Güncel Sürüm [ BETA v0.0.2 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['3'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Eglence komutlarını gösterir.',
  usage: 'yetkili [komut]'
};
