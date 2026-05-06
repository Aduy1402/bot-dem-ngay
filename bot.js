<<<<<<< HEAD
const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

let daysLeft = 324;

const CHANNEL_ID = '1501534980227072141';

client.once('ready', () => {
  console.log('Bot đã online');

  cron.schedule('0 0 * * *', async () => {
    daysLeft--;

    const channel = await client.channels.fetch(CHANNEL_ID);

    if (channel) {
      if (daysLeft > 0) {
        channel.send(`📅 Còn ${daysLeft} ngày!`);
      } else {
        channel.send(`🎉 XONG RỒI!!!`);
      }
    }
  }, {
    timezone: "Asia/Ho_Chi_Minh"
  });
});

=======
const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

let daysLeft = 324;

const CHANNEL_ID = '1501534980227072141';

client.once('ready', () => {
  console.log('Bot đã online');

  cron.schedule('0 0 * * *', async () => {
    daysLeft--;

    const channel = await client.channels.fetch(CHANNEL_ID);

    if (channel) {
      if (daysLeft > 0) {
        channel.send(`📅 Còn ${daysLeft} ngày!`);
      } else {
        channel.send(`🎉 XONG RỒI!!!`);
      }
    }
  }, {
    timezone: "Asia/Ho_Chi_Minh"
  });
});

>>>>>>> dcf7bc5c54f0f0447f584d8268a8e0a20d0ecc08
client.login(process.env.TOKEN);