const play = require('discordjs-ytdl')
module.exports = {
    kod: "play",
    async run (client, message, args){
        if (message.member.voice.channel){
            const connection = await message.member.voice.channel.join()
            play.play(connection, args.join(" "), 'AIzaSyDegnGZMJaSznGUzbKIaga_o_Kf7yMgFP8')
            let title = await play.title(args.join(" "), 'AIzaSyDegnGZMJaSznGUzbKIaga_o_Kf7yMgFP8')
message.channel.send('SONG NAME: ' + title)
        } else {
            message.reply('Bi kanala katılmalısın')
        }
    }
}