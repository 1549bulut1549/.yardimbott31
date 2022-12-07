const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const site = config.website
    const gizlilik = config.politika
  const embed = new EmbedBuilder()
.setTitle("Oh Shit Sunucusuna Gel Koş!")
.setDescription(`[Gel](${davet})\n[Gelsene Lan özr ab :D](${destek})\n[Lütfen Gel :D](${gizlilik})\n[Gel İşte Be](${site})\n[Gel Çok İyi Botlar Var Devamı Gelcek](${topgg})`)
.setColor("#ff0000")
message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "linkler"
};
