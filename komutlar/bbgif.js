const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, params) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
bbgif1 = "./img/bbgif/1.jpg"; bbgif2 = "./img/bbgif/1.gif"; bbgif3 = "./img/bbgif/1.gif"; bbgif4 = "./img/bbgif/1.gif"; bbgif5 = "./img/bbgif/1.jpg"; bbgif6 = "./img/bbgif/6.jpg";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [bbgif1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [bbgif2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [bbgif3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [bbgif4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [bbgif5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [bbgif6] }); message.channel.bulkDelete(1); break;
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bbgif'],
  permLevel: 0
};

exports.help = {
  name: 'bbgif',
  description: '+18 Özel Şeyler Gösterir!.',
  usage: 'bbgif'
};
