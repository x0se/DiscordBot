const { MessageEmbed} = require('discord.js')
module.exports = {
    kod: "nuke",
    description: "Nukes a given channel",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.reply("You do not have the perms to use this cmd!")
        }
        let reason = args.join(" ") || "No Reason"
        if(!message.channel.deletable) {
            return message.reply("This Channel cannot be nuked!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("Channel Nuked")
        .setDescription("This Channel has been nuked!")
        .setColor('GREEN')
        .setImage('https://cdn.discordapp.com/attachments/889883389816107008/889883503611752478/200.gif')
        await newchannel.send(embed)
            }
}