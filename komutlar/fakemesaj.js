module.exports = {
    kod: "fakemesaj",
    async run (client, message, args){
        const user = message.mentions.users.first()
        if (!user) return message.channel.send("Bir kullanıcıyı etiketle")
        if (user.bot) return message.channel.send("Bot'u etiketleyemezsin")
        if (!args[1]) return message.channel.send("Bir mesaj belirtiniz")
        const mesaj = args.slice(1).join(" ")   
        const webhook = await message.channel.createWebhook(user.username, {
            avatar: user.displayAvatarURL()
        })
        webhook.send(mesaj)
        setTimeout(() => {
        message.delete()
    }, 5)
    }
}