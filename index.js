const Client = require("./Base/AdditionalStyle")
const client = new Client({
    disableMentions: "everyone"
});

const fs = require("fs")

// Events Handler //
fs.readdir("./events/", (err, files) => {
    console.log(`Loading A Total File(s) Of ${files.length} DJS Events.`);
    files.forEach(file => {
        const eventStyle = file.split(".")[0];
        console.log(`Loading Event: ${eventStyle}`);
        const event = new (require(`./events/${file}`))(client);
        client.on(eventStyle, (...args) => event.run(...args));
        delete require.cache[require.resolve(`./events/${file}`)];
    })
})


// Commands Handler
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(dir => {
        fs.readdir(`./commands/${dir}/`, (err, cmd) => {
            cmd.forEach(file => {
                if (!file.endsWith(".js")) return;
                let Props = require(`./commands/${dir}/${file}`);
                let commandName = file.split(".")[0];
                console.log(`Loading Command(s): ${commandName}...`);
                let props = new Props(client);
                props.help.category = dir;
                props.location = `./commands/${dir}/${file}`;
                client.commands.set(props.help.name, props);
                props.help.aliases.forEach(alias => {
                    client.aliases.set(alias, props.help.name);
                });
            });
        });
    });
});

client.connect();