const Command = require("../../Base/Command")
const Database = require("quick.db")
const PageJS = require("../../Custom-node_modules/paginationWall-E")
const { defPrefix } = require("../../config")

class helpStyle extends Command {
    constructor(client) {
        super(client, {
            name: "help",
            description: null,
            category: "General",
            aliases: [],
            usage: []
        });
    };

    async run(message, args, DJS) {
        const bothPrefix = Database.fetch(`custPrefix.${message.guild.id}`) || defPrefix

        if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILDS")) {

            const generalEmbed = new DJS.MessageEmbed()
                .setTitle("Wall-E Help")
                .setTimestamp()
                .setAuthor("General", this.client.user.displayAvatarURL({ dynamic: false }))
                .addField(`\`${bothPrefix}userinfo\``, "Get your or someone's general information about its Discord account and in-server info.")
                .addField(`\`${bothPrefix}serverinfo\``, "Gets a information about a server in your current server.")
                .addField(`\`${bothPrefix}commands\``, "Shows the available custom commands in the current server. If there were no any single custom commands, the bot will send nothing.")
                .addField(`\`${bothPrefix}ping\``, "Get the bot latest ping and Websocket.")
                .addField(`\`${bothPrefix}remind\``, `Let the bot to remind you something. \n **Usage:** \`${bothPrefix}remind 10s Go Sleep, Tomorrow Is Online Class.\` \n Will remind you in the next 10 seconds with your reminder's messages you provided.`)
                .addField(`\`${bothPrefix}taxcalc\``, `Tax calculator. This will also answer your basic math question. Y'know, it's basically a **Calculator**! \n **Usage:** \`${bothPrefix}taxcalc <Question>\``)

                const generalsEmbed = new DJS.MessageEmbed()
                .setTitle("Wall-E Help")
                .setTimestamp()
                .setAuthor("General [2/2]", this.client.user.displayAvatarURL({ dynamic: false}))
                .addField(`\`${bothPrefix}roll\``, `Roll a dice that contains a number between 1 - 6. Of course, a dice, right?`)

            const infoEmbed = new DJS.MessageEmbed()
                .setTitle("Wall-E Help")
                .setTimestamp()
                .setAuthor("Utilities", this.client.user.displayAvatarURL({ dynamic: true }))
                .addField(`\`${bothPrefix}dog\``, "A dog picture, what'd you expect??")
                .addField(`\`${bothPrefix}cat\``, "This now will show cat picture, meow!")
                .addField(`\`${bothPrefix}duck\``, "Quack quack, some ducks picture.")
                .addField(`\`${bothPrefix}advice\``, "Giving you some advice, it can help your life better.")
                .addField(`\`${bothPrefix}meme\``, "Meme Review! Go get to see some memes.")
                .addField(`\`${bothPrefix}animeimg\``, "Some anime images. Run this command to get its options.")
              //  .addField(`\`${bothPrefix}neko\``, "Cat-appearance looking anime's girl...")
              //  .addField(`\`${bothPrefix}nekogif\``, `GIF version of \`${bothPrefix}neko\`.`)

            const Page = [
                generalEmbed,
                generalsEmbed,
                infoEmbed
            ]

            const emojiList = ["⏪", "⏩"];

            const timeout = '86400000'

            PageJS(message, Page, emojiList, timeout)

            // ---------------------------------------------- //
            // ---------------------------------------------- //
            // ---------------------------------------------- //
            // ---------------------------------------------- //
            // ---------------------------------------------- //
            // ---------------------------------------------- //

        } else if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("MANAGE_GUILDS")) {

            const generalEmbed = new DJS.MessageEmbed()
                .setTitle("Wall-E Help")
                .setTimestamp()
                .setAuthor("General [1/2]", this.client.user.displayAvatarURL({ dynamic: false }))
                .addField(`\`${bothPrefix}userinfo\``, "Get your or someone's general information about its Discord account and in-server info.")
                .addField(`\`${bothPrefix}serverinfo\``, "Gets a information about a server in your current server.")
                .addField(`\`${bothPrefix}commands\``, "Shows the available custom commands in the current server. If there were no any single custom commands, the bot will send nothing.")
                .addField(`\`${bothPrefix}ping\``, "Get the bot latest ping and Websocket.")
                .addField(`\`${bothPrefix}remind\``, `Let the bot to remind you something. \n **Usage:** \`${bothPrefix}remind 10s Go Sleep, Tomorrow Is Online Class.\` \n Will remind you in the next 10 seconds with your reminder's messages you provided.`)
                .addField(`\`${bothPrefix}taxcalc\``, `Tax calculator. This will also answer your basic math question. Y'know, it's basically a **Calculator**! \n\n **Usage:** \`${bothPrefix}taxcalc <Question>\``)
                .addField(`\`${bothPrefix}8ball\``, `Your question will be answered by me randomly. \n **Usage:** \`${bothPrefix}8ball <Question<\``)

            const generalsEmbed = new DJS.MessageEmbed()
            .setTitle("Wall-E Help")
            .setTimestamp()
            .setAuthor("General [2/2]", this.client.user.displayAvatarURL({ dynamic: false}))
            .addField(`\`${bothPrefix}roll\``, `Roll a dice that contains a number between 1 - 6. Of course, a dice, right?`)

            const modEmbed = new DJS.MessageEmbed()
                .setTitle("Wall-E Help")
                .setTimestamp()
                .setAuthor("Moderation", this.client.user.displayAvatarURL({ dynamic: false }))
                .addField(`\`${bothPrefix}setwelcome\``, `Set a basic Welcome Message in a server's channel. \n **Usage:** \`${bothPrefix}setwelcome <Channel>\``)
                .addField(`\`${bothPrefix}setleave\``, `Set a basic Leave Message in a server's channel \n **Usage:** \`${bothPrefix}setleave <Channel>\` \n Typing **None** instead of`)
                .addField(`\`${bothPrefix}prefix\``, "Change the current default prefix which is `w!` to your new custom prefix. Mention the bot if you forget its prefix.")
                .addField(`\`${bothPrefix}addcmd\``, `Add a custom commands in the current server. \n **Usage:** \`${bothPrefix}addcmd <Command_Name> <Command_Response>\``)
                .addField(`\`${bothPrefix}delcmd\``, `Delete a existing custom commands in the current server. \n **Usage:** \`${bothPrefix}delcmd <Command_Name>\` \n You Can Type \`${bothPrefix}commands\` if you forgot any custom commands you had ever added.`)
                .addField(`\`${bothPrefix}slowmode\``, `Add a slowmode in a current channel. \n **Usage:** \`${bothPrefix}slowmode 10s\` \n Will set the slowmode to 10 seconds.`)
                .addField(`\`${bothPrefix}clear\``, `Will clear messages in the current channel. Only 99 messages can be deleted by me at once. \n **Usage:** \`${bothPrefix}clear <Amount_Of_Messages>\``)
                .addField(`\`${bothPrefix}nuke\``, `Nuke a channel! Use this if your channel is raided. I'd suggest you to be careful when using this.`)


            const utilityEmbed = new DJS.MessageEmbed()
                .setTitle("Wall-E Help")
                .setTimestamp()
                .setAuthor("Utilities", this.client.user.displayAvatarURL({ dynamic: true }))
                .addField(`\`${bothPrefix}dog\``, "A dog picture, what'd you expect??")
                .addField(`\`${bothPrefix}cat\``, "This now will show cat picture, meow!")
                .addField(`\`${bothPrefix}duck\``, "Quack quack, some ducks picture.")
                .addField(`\`${bothPrefix}advice\``, "Giving you some advice, it can help your life better.")
                .addField(`\`${bothPrefix}meme\``, "Meme Review! Go get to see some memes.")
                .addField(`\`${bothPrefix}animeimg\``, "Some anime images. Run this command to get its options.")
             //   .addField(`\`${bothPrefix}neko\``, "Cat-appearance looking anime's girl...")
             //   .addField(`\`${bothPrefix}nekogif\``, `GIF version of \`${bothPrefix}neko\`.`)
            const Page = [
                generalEmbed,
                generalsEmbed,
                modEmbed,
                utilityEmbed
            ]

            const emojiList = ["⏪", "⏩"];

            const timeout = '86400000'

            PageJS(message, Page, emojiList, timeout)

        }
    }
}

module.exports = helpStyle