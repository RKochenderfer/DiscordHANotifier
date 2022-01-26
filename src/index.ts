import { Client, Intents } from "discord.js"

console.log('Hello world!')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.once('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}`)
})

client.on('error', error => {
    console.error('ERROR: ', error)
})

client.login(process.env.TOKEN!)
