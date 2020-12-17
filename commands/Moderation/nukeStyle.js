const Command = require("../../Base/Command")

class nukeStyle extends Command {
    constructor(client) {
        super(client, {
            name: "nuke",
            description: null,
            category: "Moderation",
            aliases: [],
            usage: []
        });
    };

    async run(message, args, DJS) {
        
        const user = message.member;
        if (!user.hasPermission("MANAGE_CHANNELS"))
            return message.channel.send(
                "You Need `MANAGE_CHANNELS` Permission To Continue."
            );

        const filter = (m) => m.author.id === message.author.id
        message.channel.send("You sure? Please type `-confirm` to continue. \n\n Nevermind? Type `-cancel` .")
        const collect = new DJS.MessageCollector(message.channel, filter, { time: 60000, max: 1 })
        collect.on("collect", async (msg) => {
            if (msg.content.toLowerCase() === '-confirm') {
                let channel = client.channels.cache.get(message.channel.id);
                const position = channel.position;

                const channel2 = await channel.clone();

                channel2.setPosition(position);
                channel.delete();
                const embed = new DJS.MessageEmbed()
                    .setTitle("Channel Successfully Nuked!")
                    .setDescription(`The channel was nuked by ${message.author.username}`)
                    .setColor("#FF0000")
                    .setImage("https://imgur.com/LIyGeCR")
                channel2.send(embed);
            } else if (msg.content.toLowerCase() === '-cancel') {
                return message.channel.send("Nuke have been cancelled. Guess that there will be no **World War III**...")
            }
        })
    }
}

module.exports = nukeStyle