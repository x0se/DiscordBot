const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const { MessageEmbed } = require('discord.js')

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'anavatan') {
      msg.reply('https://tenor.com/view/israel-hebrew-jewish-israeli-israeli-flag-gif-16718328');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'sa') {
      msg.reply('as :kaaba::pray::prayer_beads::star_and_crescent::mosque::woman_wearing_turban::woman_with_headscarf::man_wearing_turban:');
    }
  
  });


  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'merhaba') {
      msg.reply('merhaba');
    }
  
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('as :pray::prayer_beads::star_and_crescent::mosque::woman_wearing_turban::woman_with_headscarf::man_wearing_turban::kaaba:');
    }
  
  });

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "!"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
  
    client.user.setActivity('SFA Group')

    console.log('Bot Aktif')
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();



        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login('')


    client.on('message', async message => {
      if (message.content.startsWith('.play')) {
        const args = message.content.split(' ').slice(1)
        const motmesajı = args.join(" ")
        if (!botmesajı) return message.reply('URL koymadın')
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const ytdl = require('ytdl-core');
          connection.play(ytdl(`${botmesajı}`, { filter: 'audioonly' }))
        } else {
          message.reply('Bir Sesli Kanala Girin.');
        }
      }
    })


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
 client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Üye Atılmadı!');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Böyle Birisi Yok!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Atılacak kişiyi yazmadın!");
    }
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.guild) return;

  // if the message content starts with "plsban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Başarıyla Banlandı! ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Başka Bir Yetkiliyi Banlayamazsın!');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Böyle Biri Yok!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Banlanacak Kişiyi Yazmadın!");
    }
  }
});






client.on('message', message => {
  if (message.content.startsWith('!oylama')) {
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapmak için YÖNETİCİ rolüne sahip olmanız lazım!');
    if (!botmesajı) return message.reply('Oylamayı Belirtmediniz! :rage:');
    message.delete(message.author)
    const embed = new MessageEmbed()
    .setTitle('OYLAMA')
    .setDescription(botmesajı)
    .setFooter('Kesinlikle')
    .setColor('GREEN')
    .setImage('https://cdn.discordapp.com/attachments/872489788823977995/872787326915444787/download.jpg');
    message.channel.send({ embed: embed }).then( embedMessage => {
      embedMessage.react("✔️")
      embedMessage.react("❌");
    })
  }
})


const yardım = new MessageEmbed()
.setTitle('`Merhaba, Ben Legion Guardian. Ben bir Moderasyon ve Eğlence botuyum. Komutlarıma Ulaşmak için !commands yazınız.`')
.addField('Davet Linki', '[TIKLA](https://discord.com/api/oauth2/authorize?client_id=889870881134891038&permissions=8&scope=bot)')
.addField('Youtube', '[TIKLA](https://www.youtube.com/channel/UCqRQuJ3ZLSbAvPaLJFjLEMg)')
.addField('Twitter', '[TIKLA](https://twitter.com/enjoyteala)')
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.channel.send(yardım);
  }

});




const commands = new MessageEmbed()
.setTitle('Prefix: "!"')
.setDescription('Moderasyon Komutları: `ban`,`kick`,`clear`,`nuke`\n Müzik Komutları: `play`,`disconnect`\n Eğlence Komutları: `oylama`,`serverinfo`,`fakemesaj`,`ping`,`avatar`,``takım`,`din`,`siyasi-parti`, `kaçcm` :flushed: `nahçek`, `gayolcer` ')

.setTimestamp()
.setColor('red')

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'commands') {
    msg.channel.send(commands);
  }

});


client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!kural') {
    var Maç1 = [
      "https://cdn.discordapp.com/attachments/889883636613132369/889891568549502996/unknown.png"
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .addField('Rules', '\u200b')
    .setImage(Maç1[maç1galip])
    message.channel.send(embed);
  }
})


client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!nah') {
    var Maç1 = [
      'https://cdn.discordapp.com/attachments/889894310324097044/889897511110725662/nah2.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897512780054538/nah7.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897517263781908/nah11.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897520455643166/nah3.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897524217929758/nah6.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897528600985630/nah10.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897532740759674/nah4.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897537337708574/nah5.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897545957007390/nah9.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897552273612800/nah.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897554630803516/nah8.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889897559194210314/nah12.jpg',

    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .addField('NAH','\u200b')
    .setImage(Maç1[maç1galip])
    message.channel.send(embed);
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!takım') {
    var Maç1 = [
      'https://cdn.discordapp.com/attachments/889894310324097044/889910144698318888/ts.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910147160363038/karagumruk.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910149412687872/fb.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910150805192724/mal.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910154215166002/rize.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910156031328286/basaksehir.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910157998428210/antalya.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910160875733082/kas.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910162746400779/goz.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910165380399165/hatay.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910167246888980/altay.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910169562148884/konya.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910191636774962/giresun.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910192316231680/kay.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910193238986782/ss.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910195327733811/ad.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910194384015442/alanya.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910196292435988/gazi.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889910198792224829/bjk.jpg',
      
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .addField('TAKIM','\u200b')
    .setImage(Maç1[maç1galip])
    message.channel.send(embed);
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!siyasi-parti') {
    var Maç1 = [
      'https://cdn.discordapp.com/attachments/889894310324097044/889900043673407548/akp.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900047670603827/ip.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900051038617651/hdp.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900056440889404/gelecek.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900062476496936/chp.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900066138124319/mhp.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900071301312534/deva.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900075147472906/memleket.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900078591004732/tkp.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900083271839865/ldp.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900086853779486/tip.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889900090611892274/sp.jpg',

    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .addField('PARTİ','\u200b')
    .setImage(Maç1[maç1galip])
    message.channel.send(embed);
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!din') {
    var Maç1 = [
      'https://cdn.discordapp.com/attachments/889894310324097044/889903251317723206/ate.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889903253037400064/hinduizm.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889903253947564073/satan.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889903255025500220/hri.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889903255902113862/deizm.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889903258536140830/yahudi.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889903259106553876/agno.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889903261119832084/islam.jpg',
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .addField('DİN','\u200b')
    .setImage(Maç1[maç1galip])
    message.channel.send(embed);
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!ideoloji') {
    var Maç1 = [
      'https://cdn.discordapp.com/attachments/889894310324097044/889902203869999174/an.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889902205115715644/ancap.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889902207812661248/cap.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889902209037385801/social.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889902211583320126/com.jpg',
      'https://cdn.discordapp.com/attachments/889894310324097044/889902212942282752/seriat.png',
      'https://cdn.discordapp.com/attachments/889894310324097044/889902214280282192/liberal.jpg',
  
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .addField('İDEOLOJİ','\u200b')
    .setImage(Maç1[maç1galip])
    message.channel.send(embed);
  }
})




client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!kaçcm') {
    var Maç1 = [
      '1 cm :eggplant:',
      '2 cm :eggplant:',
      '3 cm :eggplant:',
      '4 cm :eggplant:',
      '5 cm :eggplant:',
      '6 cm :eggplant:',
      '7 cm :eggplant:',
      '8 cm :eggplant:',
      '9 cm :eggplant:',
      '10 cm :eggplant:',
      '11 cm :eggplant:',
      '12 cm :eggplant:',
      '13 cm :eggplant:',
      '14 cm :eggplant:',
      '15 cm :eggplant:',
      '16 cm :eggplant:',
      '17 cm :eggplant:',
      '18 cm :eggplant:',
      '19 cm :eggplant:',
      '20 cm :eggplant:',
      '21 cm :eggplant:',
      '22 cm :eggplant:',
      '23 cm :eggplant:',
      '24 cm :eggplant:',
      '25 cm :eggplant:',
      '26 cm :eggplant:',
      '27 cm :eggplant:',
      '28 cm :eggplant:',
      '29 cm :eggplant:',
      '30 cm :eggplant:',
      '31 cm :eggplant:',
      '32 cm :eggplant:',
      '33 cm :eggplant:',
      '34 cm :eggplant:',
      '35 cm :eggplant:',
      '36 cm :eggplant:',
      '37 cm :eggplant:',
      '38 cm :eggplant:',
      '39 cm :eggplant:',
      '40 cm :eggplant:',
      '41 cm :eggplant:',
      '42 cm :eggplant:',
      '43 cm :eggplant:',
      '44 cm :eggplant:',
      '45 cm :eggplant:',
      '46 cm :eggplant:',
      '47 cm :eggplant:',
      '48 cm :eggplant:',
      '49 cm :eggplant:',
      '50 cm :eggplant:',
      '51 cm :eggplant:',
      '52 cm :eggplant:',
      '53 cm :eggplant:',
      '54 cm :eggplant:',
      '55 cm :eggplant:',
      '56 cm :eggplant:',
      '57 cm :eggplant:',
      '58 cm :eggplant:',
      '59 cm :eggplant:',
      '60 cm :eggplant:',
      '61 cm :eggplant:',
      '62 cm :eggplant:',
      '63 cm :eggplant:',
      '64 cm :eggplant:',
      '65 cm :eggplant:',
      '66 cm :eggplant:',
      '67 cm :eggplant:',
      '68 cm :eggplant:',
      '69 cm :eggplant:',
      '70 cm :eggplant:',
      '71 cm :eggplant:',
      '72 cm :eggplant:',
      '73 cm :eggplant:',
      '74 cm :eggplant:',
      '75 cm :eggplant:',
      '78 cm :eggplant:',
      '79 cm :eggplant:',
      '80 cm :eggplant:',
      '81 cm :eggplant:',
      '82 cm :eggplant:',
      '83 cm :eggplant:',
      '84 cm :eggplant:',
      '85 cm :eggplant:',
      '86 cm :eggplant:',
      '87 cm :eggplant:',
      '88 cm :eggplant:',
      '89 cm :eggplant:',
      '90 cm :eggplant:',
      '91 cm :eggplant:',
      '92 cm :eggplant:',
      '93 cm :eggplant:',
      '94 cm :eggplant:',
      '95 cm :eggplant:',
      '96 cm :eggplant:',
      '97 cm :eggplant:',
      '98 cm :eggplant:',
      '99 cm :eggplant:',
      '100 cm :eggplant:'
        ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .setTitle('MALAFATIN TAM :flushed: \u200b')
    .setDescription(Maç1[maç1galip])
    message.channel.send(embed);
  }
})



client.on('message', message => {
  if (message.content.toLocaleLowerCase() === '!gayolcer') {
    var Maç1 = [
      '%1 GAY :rainbow_flag: ',
      '%2 GAY :rainbow_flag: ',
      '%3 GAY :rainbow_flag: ',
      '%4 GAY :rainbow_flag: ',
      '%5 GAY :rainbow_flag: ',
      '%6 GAY :rainbow_flag: ',
      '%7 GAY :rainbow_flag: ',
      '%8 GAY :rainbow_flag: ',
      '%9 GAY :rainbow_flag: ',
      '%10 GAY :rainbow_flag: ',
      '%11 GAY :rainbow_flag: ',
      '%12 GAY :rainbow_flag: ',
      '%13 GAY :rainbow_flag: ',
      '%14 GAY :rainbow_flag: ',
      '%15 GAY :rainbow_flag: ',
      '%16 GAY :rainbow_flag: ',
      '%17 GAY :rainbow_flag: ',
      '%18 GAY :rainbow_flag: ',
      '%19 GAY :rainbow_flag: ',
      '%20 GAY :rainbow_flag: ',
      '%21 GAY :rainbow_flag: ',
      '%23 GAY :rainbow_flag: ',
      '%24 GAY :rainbow_flag: ',
      '%25 GAY :rainbow_flag: ',
      '%26 GAY :rainbow_flag: ',
      '%27 GAY :rainbow_flag: ',
      '%28 GAY :rainbow_flag: ',
      '%29 GAY :rainbow_flag: ',
      '%30 GAY :rainbow_flag: ',
      '%31 GAY :rainbow_flag: ',
      '%32 GAY :rainbow_flag: ',
      '%33 GAY :rainbow_flag: ',
      '%34 GAY :rainbow_flag: ',
      '%35 GAY :rainbow_flag: ',
      '%36 GAY :rainbow_flag: ',
      '%37 GAY :rainbow_flag: ',
      '%38 GAY :rainbow_flag: ',
      '%39 GAY :rainbow_flag: ',
      '%40 GAY :rainbow_flag: ',
      '%41 GAY :rainbow_flag: ',
      '%42 GAY :rainbow_flag: ',
      '%43 GAY :rainbow_flag: ',
      '%44 GAY :rainbow_flag: ',
      '%45 GAY :rainbow_flag: ',
      '%46 GAY :rainbow_flag: ',
      '%47 GAY :rainbow_flag: ',
      '%48 GAY :rainbow_flag: ',
      '%49 GAY :rainbow_flag: ',
      '%50 GAY :rainbow_flag: ',
      '%51 GAY :rainbow_flag: ',
      '%52 GAY :rainbow_flag: ',
      '%53 GAY :rainbow_flag: ',
      '%54 GAY :rainbow_flag: ',
      '%55 GAY :rainbow_flag: ',
      '%56 GAY :rainbow_flag: ',
      '%57 GAY :rainbow_flag: ',
      '%58 GAY :rainbow_flag: ',
      '%59 GAY :rainbow_flag: ',
      '%60 GAY :rainbow_flag: ',
      '%61 GAY :rainbow_flag: ',
      '%62 GAY :rainbow_flag: ',
      '%63 GAY :rainbow_flag: ',
      '%64 GAY :rainbow_flag: ',
      '%65 GAY :rainbow_flag: ',
      '%66 GAY :rainbow_flag: ',
      '%67 GAY :rainbow_flag: ',
      '%68 GAY :rainbow_flag: ',
      '%69 GAY :rainbow_flag: ',
      '%70 GAY :rainbow_flag: ',
      '%71 GAY :rainbow_flag: ',
      '%72 GAY :rainbow_flag: ',
      '%73 GAY :rainbow_flag: ',
      '%74 GAY :rainbow_flag: ',
      '%75 GAY :rainbow_flag: ',
      '%76 GAY :rainbow_flag: ',
      '%77 GAY :rainbow_flag: ',
      '%78 GAY :rainbow_flag: ',
      '%79 GAY :rainbow_flag: ',
      '%80 GAY :rainbow_flag: ',
      '%81 GAY :rainbow_flag: ',
      '%82 GAY :rainbow_flag: ',
      '%83 GAY :rainbow_flag: ',
      '%84 GAY :rainbow_flag: ',
      '%85 GAY :rainbow_flag: ',
      '%86 GAY :rainbow_flag: ',
      '%87 GAY :rainbow_flag: ',
      '%88 GAY :rainbow_flag: ',
      '%89 GAY :rainbow_flag: ',
      '%90 GAY :rainbow_flag: ',
      '%91 GAY :rainbow_flag: ',
      '%92 GAY :rainbow_flag: ',
      '%93 GAY :rainbow_flag: ',
      '%94 GAY :rainbow_flag: ',
      '%95 GAY :rainbow_flag: ',
      '%96 GAY :rainbow_flag: ',
      '%97 GAY :rainbow_flag: ',
      '%98 GAY :rainbow_flag: ',
      '%99 GAY :rainbow_flag: ',
      '%100 GAY :rainbow_flag: ',

    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    const embed = new MessageEmbed()
    .setTitle('GAY ÖLÇER :rainbow_flag: \u200b')
    .setDescription(Maç1[maç1galip])
    message.channel.send(embed);
  }
})
