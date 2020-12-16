class Command {
    /**
     * @param {Client} client DJS Client
     * @param {Object} options Command Config
     */
    constructor(
        client,
        {
            name = null,
            description = "No Description Provided",
            category = "Other",
            usage = ["No Usage Provided"],
            aliases = new Array()
        }
    ) {
        this.client = client
        this.help = { name, description, category, usage, aliases};
    }
    
}

module.exports = Command