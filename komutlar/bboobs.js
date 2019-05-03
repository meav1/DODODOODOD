const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, params) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
bboobs1 = "./img/bboobs/1.jpg"; bboobs2 = "./img/bboobs/2.gif"; bboobs3 = "./img/bboobs/3.gif"; bboobs4 = "./img/bboobs/4.gif"; bboobs5 = "./img/bboobs/5.jpg"; bboobs6 = "./img/bboobs/6.jpg";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [bboobs1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [bboobs2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [bboobs3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [bboobs4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [bboobs5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [bboobs6] }); message.channel.bulkDelete(1); break;
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bboobs'],
  permLevel: 0
};

exports.help = {
  name: 'bboobs',
  description: '+18 Özel Şeyler Gösterir!.',
  usage: 'bboobs'
};
