
                (async()=>{

                const Discord = require("discord.js");
                const { DB } = require("quickmongo");
                const { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu } = require('discord.js')
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const Client = require('discord.js')
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });


                await s4d.client.login('OTM5NzM0ODQ0MzUzNjc5Mzgy.Yf9KRg.wzUQvAeHHAJ9HHgScNAsMk6sMWQ').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!InfoOwner') {
    let embed = new Discord.MessageEmbed()
       embed.setColor('#ffcc00');
      embed.addField('Info','Owner has Created this bot, If you want to ping him you will have to have a good reason or mute ',);

  }

});


                return s4d;
                })();
            