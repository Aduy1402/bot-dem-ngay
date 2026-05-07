const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

let daysLeft = 323;

const CHANNEL_ID = 'DAN_ID_VAO_DAY';

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

client.login(process.env.TOKEN);
