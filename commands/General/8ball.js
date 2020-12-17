const Command = require("../../Base/Command")

class eightBallStyle extends Command {
    constructor(client) {
        super(client, {
            name: "8ball",
            description: null,
            category: "General",
            aliases: [],
            usage: []
        }); 
    };

    async run(message, args, DJS) {
        if (!args[0]) {
            return message.channel.send("You Must Give A Question!!")
        }

        const Answer = ["Yes", "No", "Maybe", "Think Yourself", "Uhh...", "Certainly", "Definetly", , "Of Course", "I Don't Know", "Who's There?", "Yep, Good Luck", ":)"];

        const randomAns = Math.floor(Math.random() * Answer.length);

        const eightBallEmbed = new DJS.MessageEmbed()
            .setTitle("8BALL")
            .setThumbnail("https://o.remove.bg/downloads/e8d6d3fe-e904-4174-baab-d1f01577205b/magic-8-ball-8-ball-pool-eight-ball-billiards-png-favpng-2WdyCytn9d0q9yTtmAfJAiveF-removebg-preview.png")
            .addField(`${message.author.tag}'s Question:`, `${args.join(" ")}`)
            .addField("Wall-E's Opinion", `${Answer[randomAns]}`)
            .setColor("RANDOM")
            if(message.deletable) return message.delete()
            return message.channel.send(eightBallEmbed)
            
    }
}

module.exports = eightBallStyle