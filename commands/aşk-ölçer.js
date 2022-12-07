const {EmbedBuilder} = require("discord.js");
const { prefix } = require("../config.js")

exports.run = async (client, message, args) => {

  const user = message.mentions.users.first()
  if(!user) return message.channel.send("Lütfen birini etiketle!")
  
  const tahmin = Math.floor(Math.random() * 99) + 1
  var kalp;
  var yorum; 
  
  if(tahmin <= 25) {
    kalp = `❤️🖤🖤🖤🖤🖤`
    yorum = "Yok aga sg et."
  }
  
  if(tahmin >= 25) {
    kalp = `❤️❤️🖤🖤🖤🖤`
    yorum = "Bişe Hissetmiyo Ama Dene şansını dikkat et yapıştırmasın :)"
  }
  
  if(tahmin >= 50) {
    kalp = `❤️❤️❤️🖤🖤🖤`
    yorum = "Oluyo Oluyo."
  }
  
  if(tahmin >= 75) {
     kalp = `❤️❤️❤️❤️🖤🖤`
     yorum = "aga naptın nasıl iki kalp kırmayı becerdin oluyomuş:)"
  }

  if(tahmin >= 85) {
    kalp = `❤️❤️❤️❤️❤️🖤`
    yorum = "Oldu valla oldu :D:D:D :))"
  }
  
  if(tahmin === 100) {
    kalp = `❤️❤️❤️❤️❤️❤️`
    yorum = "Sizi evlendirelim skişin :D <3"
  }
  
  message.channel.send({ embeds: [
    new EmbedBuilder()
    .setColor("Red")
    .setDescription(`Aşk Yüzdesi: %${tahmin}\n${kalp}\n\n${yorum}`)
  ]})
  
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "aşkölçer"
};