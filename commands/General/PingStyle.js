const CommandStyle = require("../../Base/Command")

class HelpStyle extends CommandStyle {
    constructor(client) {
        super(client, {
            name: "ping",
            description: "Display the help message",
            category: "General",
            aliases: [],
            usage: []
        });
    }

    async run(message, args, DJS) {
        message.channel.send(`My Name Is: ${this.client.user.tag}`) 
    }
}

module.exports = HelpStyle