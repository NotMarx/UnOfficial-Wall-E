const DJS = require("discord.js")
const Database = require("quick.db")
const { defPrefix } = require("../config")


module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(message) {
        if(!message.guild || message.author.bot) return; // If users weren't in the guild or user is a bot.
        // Checking Bot's Permission //
        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return; // If the bot do not have permission to send messages.
        if(!message.guild.me.hasPermission("EMBED_LINKS")) return; // If the bot do not have permission to send embed links.

        let custPrefix = Database.get(`custPrefix.${message.guild.id}`);
        if (custPrefix === null) custPrefix = defPrefix

        this.prefix = custPrefix

        // Commands & Args //
        const args = message.content.slice(custPrefix.length).trim().split(" ");
        const command = args.shift().toLowerCase();
        const cmd = this.client.fetchCommand(command);
        if (!cmd) return;

        // Command Handler //
        cmd.run(message, args, DJS);
    }
}