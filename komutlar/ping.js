module.exports = {
    kod: "ping",
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('🏓PİNG ÖLÇÜLÜYOR🏓')
        .addField('🏓Bot Pingi🏓:', client.ws.ping + ' ms')
        .addField('🏓Mesaj Gecikme Süresi🏓:', `${Date.now() - message.createdTimestamp} ms`)
        .setColor('#ff002f')
        .setThumbnail('https://cdn.discordapp.com/avatars/734434599681261668/904b1eb997baf01937caa15bac36f721.webp?size=4096')
        message.channel.send(embed)
    }
}