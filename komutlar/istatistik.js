const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
module.exports = {
    kod: "istatistik",
    async run(client, message, args) {
        const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
        const embed = new MessageEmbed()
        .setTitle('>>İstatistik<<')
        .addField('>>Sunucu Sayısı<<', client.guilds.cache.size)
        .addField('>>Kanal Sayısı<<', client.channels.cache.size)
        .addField('>>Uptime Süresi<<', uptime)
        .addField('>>Node.js Version<<', process.version)
        .addField('>>Ram Kullanımı<<', (process.memoryUsage().heapUsed / 1024/1024).toFixed(2))
        .addField('>>CPU<<', os.cpus().map(i => i.model)[0])
        .addField('>>Bit<<', os.arch())
        .addField('>>İşletim Sistemi<<', os.platform())
        .setColor('#00ff77')
        .setThumbnail('https://cdn.discordapp.com/avatars/734434599681261668/904b1eb997baf01937caa15bac36f721.webp?size=4096')
        message.channel.send(embed)
    }
}