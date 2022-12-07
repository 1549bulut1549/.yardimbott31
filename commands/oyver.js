const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const destek = config.desteksunucusu
   
  const embed = new EmbedBuilder()
.setDescription(`**Oy ver**: [Tıkla](${topgg})\n**Destek Sunucum**: [Tıkla ve Sunucuya Gel orda oyverebilirsin ve seninde botun olabilir.](${destek})\n\n**Bota Oy Ver, Kazan**\nBota oy vererek oy verme zorunluluğu olan komutları kullanabilir ve destek sunucumuzda s!oyverdim komutu ile Destekçi rolü alabilirsiniz!`)
.setColor("#ff0000")
message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "oyver"
};
