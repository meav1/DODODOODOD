const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
  huseyin1 = "./img/ataturk/7.jpg"; huseyin2 = "./img/ataturk/7.jpg"; huseyin3 = "./img/ataturk/7.jpg"; huseyin4 = "./img/ataturk/7.jpg"; huseyin5 = "./img/ataturk/7.jpg"; huseyin6 = "./img/ataturk/7.jpg";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [huseyin1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [huseyin2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [huseyin3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [huseyin4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [huseyin5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [huseyin6] }); message.channel.bulkDelete(1); break;		
};
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['huseyin272'],
  permLevel: 0
};

exports.help = {
  name: 'huseyin272',
  description: 'Hüseyine Özel Yapılmıştır!',
  usage: 'huseyin272'
};
