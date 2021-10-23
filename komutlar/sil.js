module.exports = {
    kod: "sil",
    async run (client, message, args){
        if (isNaN(args)) return message.reply('Lütfen Bir Sayı Belirtin.')
        if (args < 2 || args > 100) return message.reply('Lütfen 2-100 Arası Bir Sayı Belirtiniz.')
        message.channel.bulkDelete(Number(args))
        const { MessageEmbed} = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Mesajlar Başarıyla Silindi.')
        .setDescription('Silinen Mesaj Sayısı: ' + args)
        .setColor('#00ff77')        
        .setThumbnail('https://cdn.discordapp.com/avatars/734434599681261668/904b1eb997baf01937caa15bac36f721.webp?size=4096')
        message.channel.send(embed).then(mesaj => {

        })
    }
}
