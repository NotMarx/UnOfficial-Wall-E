const Command = require("../../Base/Command")
const moment = require("moment")
const formatDate = (date) => moment(date).format("DD/MM/YYYY")

class userStyle extends Command {
    constructor(client) {
        super(client, {
            name: "userinfo",
            description: "",
            category: "Information",
            aliases: [],
            usage: []
        });
    };

    async run(message, args, DJS) {

        const member =
        message.guild.members.cache.get(args.join(" ")) ||
        message.mentions.members.first() ||
        message.member ||
        message.member.user;
  
      if (!member) {
        return message.channel.send("User wasn't found!");
      }
  
      const joinedAt = formatDate(member.joinedAt);
      const createdAt = formatDate(member.user.createdAt);
      const nickname = member.nickname || "None";
      const isBot = member.user.bot;
     
  
      const roles =
        member.roles.cache
          .filter((r) => r.id !== message.guild.id)
          .sort((a, b) => b.rawPosition - a.rawPosition)
          .map((r) => r)
          .join(" | ") || "None";
      const roleCount = member.roles.cache.filter(
        (r) => r.id !== message.guild.id
      ).size;
  
      const { username, id, tag } = member.user;
  
      const embed = new DJS.MessageEmbed()
        .setColor("RANDOM")
        .addField("**ID**", id, true)
        .addField("**Username**", username, true)
        .addField("**Bot Account**", isBot, true)
        .addField("**Tag**", tag, true)
        .addField("**Created At**", createdAt, true)
        .addField("**Joined At**", joinedAt, true)
        .addField("**Server Nickname**", nickname, true)
        .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))

        .addField(`**Roles [${roleCount}]**`, roles)
        .setTitle(`${username}'s User Informations`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }));
  
      message.channel.send(embed);

    }
}

module.exports = userStyle