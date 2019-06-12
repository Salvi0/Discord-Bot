var { prefix } = require('../config.json');

exports.run = async (client, message, params) => {
	await message.delete();
    var user = message.mentions.members.first();
    // some checks
    if(!user || user.user.bot){
        message
			.reply(`Usage: \`\`${prefix}unmute <user>\`\``)
            .then((msg) => setTimeout(() => msg.delete(), 10 * 1000));
            return;
    }
    if (!message.member.roles.has("521413330481446933")) {
        message.reply("This user is not muted <:mildpanic:580112641737883668>")
        .then((msg) => setTimeout(() => msg.delete(), 10 * 1000));
        return;
    }
    if (user.id != message.author.id) {
        user.removeRole("521413330481446933");
        message.channel.send(`<@${user.id}> you have been unmuted by **${message.member.displayName}**, We hope you have understood the rules!`);
    } else {
        message
            .reply("You're not muted you B-Baka! <:satania_blush:517464990710759425>")
            .then((msg) => setTimeout(() => msg.delete(), 10 * 1000));
    }
};

exports.conf = {
	enabled: true,
	aliases: [],
	permLevel: 1
};

exports.help = {
	name: 'unmute',
	description: 'unmute users',
	usage: 'unmute <user>'
};
