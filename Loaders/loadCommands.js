const fs = require("fs");

module.exports = async bot => {
    fs.readdirSync("../Commands").filter(f => f.endsWith(".js")).then(async file => {
        let command = require(`../Commands/${file}.js`);
        if(command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length -3)} n'existe pas`);
        bot.commands.set(command.name, command);
        console.log(`Commande ${file} chargée avec succès !`);
    })
}