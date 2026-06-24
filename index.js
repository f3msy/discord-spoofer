// @ts-check

const { Client } = require('discord.js-selfbot-v13');
const config = require('./config.json');

/** @type {Set<import('discord.js-selfbot-v13').Client>} */
const clients = new Set();

const blue = '\x1b[34m';
const bold = '\x1b[1m';
const reset = '\x1b[0m';

for (const token of config.tokens) {
    for (const [browser, device] of Object.entries(config.devices)) {
        if (!device.spoof) continue;

        /** @type {import('discord.js-selfbot-v13').Client} */
        const client = new Client({ ws: { properties: { browser } } });

        console.clear();

        client.once('ready', () => {
            if (config.status === "online") client.user?.setStatus("online");
            else if (config.status === "idle") client.user?.setStatus("idle");
            else if (config.status === "dnd") client.user?.setStatus("dnd");
    
            console.log(`${bold}spoofed as ${blue}${browser}${reset} on ${blue}${bold}${device.name}${reset} | ${bold}${client.user?.username}${reset}`);
        });

        client.login(token).catch(console.error);
        clients.add(client);
    }
}

process.once('SIGINT', () => {
    clients.forEach(client => client.destroy());
    // destroy each client, due to it keeping on the gateway WSS for a bit after.
    
    process.exit(0);
});
