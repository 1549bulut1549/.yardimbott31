const Discord = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, args) => {

axios({
method: 'get',
url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.milliyet.com.tr%2Fgundem%2Fulu-onderin-aramizdan-ayrilisinin-81-yil-donumu-10-kasim-mesajlari-ve-resimleri-6076018&psig=AOvVaw0h_VODsnJgGjjqSu5g--8i&ust=1670506288560000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJifq4HP5_sCFQAAAAAdAAAAABAE"
}).then(async image => {
const attachment = new Discord.AttachmentBuilder(image.data.image)
return message.channel.send({files: [attachment]}).catch(err => {})

})
}

exports.conf = {
aliases: []
}

exports.help = {
name: "atatürk"
}