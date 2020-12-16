const DJS = require("discord.js")
const client = new DJS.Client()

class AdditionalStyle extends DJS.Client {
    constructor(options) {
        super(options);
        this.commands = new DJS.Collection();
        this.aliases = new DJS.Collection();
        this.config = require("../config")
    }

    fetchCommand(name) {
        return this.commands.get(name) || this.commands.get(this.aliases.get(name));
    }

    connect() {
        return this.login(this.config.token);
    }

}

module.exports = AdditionalStyle