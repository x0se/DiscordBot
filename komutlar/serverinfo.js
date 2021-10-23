module.exports = {
    kod: "serverinfo",
    async run (client, message, args){
        const { MessageEmbed, Guild } = require('discord.js')
        var guild = message.guild
        var kanallar = guild.channels.cache
        var üyeler = guild.members.cache
        var emojiler = guild.emojis.cache
        var roller = guild.roles.cache
        var embed = new MessageEmbed()
        .setTitle(`${guild.name} Adlı Sunucunun bilgileri`)
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addField('>>**TEMEL BİLGİLER**<<', [
            `>>**Sunucu Adı:** ${guild.name}`,
            `>>**Sunucu İD:** ${guild.id}`,
            `>>**Sunucu Kurucusu:** <@${guild.owner.id}>`,
            `>>**Sunucu Kurucusunun Tagı:** ${guild.owner.user.tag}`
                ])
        .addField('>>**İSTATİSTİKLER:**<<', [
            `>>**Üye Sayısı:** ${guild.memberCount}`,
            `>>**İnsan Sayısı:** ${üyeler.filter(üye => !üye.user.bot).size}`,
            `>>**Bot Sayısı:** ${üyeler.filter(üye => üye.user.bot).size}`,
            `>>**Emoji Sayısı:** ${emojiler.size}`,
            `>>**Rol Sayısı:** ${roller.filter(rol => rol.name !== '@everyone' ).size}`,
            `>>**Kanal Sayısı:** ${kanallar.size}`,
            `>>**Metin Kanalı Sayısı:** ${kanallar.filter(kanal => kanal.type === 'text').size}`,
            `>>**Ses Kanalı Sayısı:** ${kanallar.filter(kanal => kanal.type === 'voice').size}`,
            `>>**Kategori Sayısı:** ${kanallar.filter(kanal => kanal.type === 'category').size}`,
        ])
        .addField('>>**DURUMLAR**<<', [
            `>>**Çevrimiçi:** ${üyeler.filter(üye => üye.presence.status === 'online').size}`,
            `>>**Boşta:** ${üyeler.filter(üye => üye.presence.status === 'idle').size}`,
            `>>**Rahatsız Etmeyin:** ${üyeler.filter(üye => üye.presence.status === 'dnd').size}`,
            `>>**Çevrimdışı:** ${üyeler.filter(üye => üye.presence.status === 'offline').size}`,
                ])
                .setColor('RANDOM')
                .setTimestamp()
        message.channel.send(embed)
    }
}