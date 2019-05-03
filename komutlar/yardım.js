const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Tüm Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .addField("**» Eğlence Komutları İçin :rocket: [;1]**", `Eğlence Komutları » (;eglence)`)
  .addField("**» Kullanıcı Komutları İçin :keyboard:  [;2]**", `;Kullanıcı Komutları » ;kullanıcı`)
  .addField("**» Yetkili Komutları İçin :gear: [;3]**", `Yetkili Komutları » ;yetkili`)
  .addField("**» Ana Komutlar İçin 🌏 [;4]**", "Ana Komutlar » ;anakomutlar")
  .addField("**» Oyun Komutları İçin :video_game: [;5]**", `;Oyun Komutları » ;oyunkomutları`)
  .addField("**» Özel Komutlar İçin :heart_eyes: [;6]**", `Özel Komutlar » ;ozelkomutlar `)
  .addField("**» Daha Fazla Bilgi İçin **", `**slayerviper.sitem.xyz**`)
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
