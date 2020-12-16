'use-strict';

module.exports = class {
    constructor(client) {
       this.client = client;
    }

    async run() {
        this.client.user.setPresence( { activity: { name: "UnOfficial Wall-E Code", type: "PLAYING"}, status: "idle"});
        console.log(`Like This Bot? Give It A ⭐ On GitHub! https://github.com/NotMarx/UnOfficial-Wall-E | \n User: ${this.client.user.tag} \n Servers: ${this.client.guilds.cache.size} \n Users: ${this.client.users.cache.size}`)
    }
}