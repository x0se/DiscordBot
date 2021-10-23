module.exports = {
    kod: "avatar",
    async run (client, message, args){
        const { MEssageEmbed, MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
        .setTitle('Avatar')
        .setImage(user.displayAvatarURL({ dynamic: true, size: 4096,}))
        message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
        .setTitle('Al Sana Avatar')
        .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096,}))
        .setColor('#00ff77')    
        message.channel.send(embed)
        }
    }
}