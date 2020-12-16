const Command = require("../../Base/Command")
const moment = require("moment")
const formatDate = (date) => moment(date).format("DD/MM/YYYY")

class serverCountStyle extends Command {
    constructor(client) {
        super(client, {
            name: "serverinfo",
            description: null,
            category: "Information",
            aliases: [],
            usage: []
        });
    };

    async run(message, args, DJS) {

        const roles =
        message.guild.roles.cache
          .filter((r) => r.id !== message.guild.id)
          .sort((a, b) => b.rawPosition - a.rawPosition)
          .map((r) => r)
          .join(" | ") || "None";
      const roleCount = message.guild.roles.cache.filter(
        (r) => r.id !== message.guild.id
      ).size;

      const emojis = 
      message.guild.emojis.cache
      .filter((e) => e.id !== message.guild.id)
      .sort((a, b) => b.rawPosition - a.rawPosition)
      .map((e) => e)
      .join("  ") || "None"

      const emojiCount = message.guild.emojis.cache.filter(
          (r) => r.id !== message.guild.id
      ).size

      const guildCreate = formatDate(message.guild.createdAt)

        const serverEmbed = new DJS.MessageEmbed()
        .setTitle(`Server Information For: ${message.guild.name}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField("Name", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Server's Owner", await message.guild.members.fetch(message.guild.ownerID), true)
        .addField("Members", message.guild.memberCount, true)
        .addField("Created At", guildCreate, true)
        .addField(`Roles [${roleCount}]`, roles, true)
        .addField(`Emojis [${emojiCount}]`, emojis, true)

        message.channel.send(serverEmbed)
    }
}

module.exports = serverCountStyle