"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const db_1 = require("../../../database/db");
var { prefix } = require("../../../config.json");
module.exports.run = async (message, params) => {
    var embed = new Discord.MessageEmbed({
        title: "Mute",
        description: `*You can mute a user by typing
        \`\`${prefix}mute <user> [0d 0h 0m]\`\`*`,
        color: "#FF7000"
    });
    message.delete();
    if (params.length == 0) {
        message.channel
            .send(embed)
            .then(msg => setTimeout(() => msg.delete(), 10 * 1000));
        return;
    }
    if (message.mentions.users.size == 0) {
        embed.setDescription("You need to provide a user to mute.");
        message.channel
            .send(embed)
            .then(msg => setTimeout(() => msg.delete(), 5 * 1000));
        return;
    }
    // @ts-ignore
    if (message.mentions.users.first().id == message.author.id) {
        embed.setDescription("You can't mute yourself!");
        message.channel
            .send(embed)
            .then(msg => setTimeout(() => msg.delete(), 5 * 1000));
        return;
    }
    console.log((await db_1.db.query("SELECT * FROM mutes WHERE userID = ?", 
    // @ts-ignore
    message.mentions.users.first().id))[0]);
};
module.exports.config = {
    name: "mute",
    permLevel: 1,
    enabled: false
};
