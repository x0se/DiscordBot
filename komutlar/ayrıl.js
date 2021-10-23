module.exports = {
    kod: "disconnect",
    async run (client, message, args){
        if (!message.member.voice.channel) return message.channel.send('Seslide Değilsin!');
        if (!message.guild.me.voice.channel) return message.channel.send('Sesli kanallara bi bak bot var mı?')
        if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Botla Aynı Kanalda Değilsin!')
        message.member.voice.channel.leave()
        message.channel.send('Başarıyla Ayrıldım!')
    }
}