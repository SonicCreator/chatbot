// TWITCHAT
// © forevertoo


// The bot starts to run.
console.info("done")

// Log Copyright notice
console.info("----------------------------------------------------");
console.info("           TWITCHAT                                 ");
console.info("           © 2020 forevertoo                        ");
console.info("           credits to controlmypc for controlmybot original code");
console.info("----------------------------------------------------");
const tmi = require('tmi.js');
// Configuration
const config = require('./config.json');
const opts = {
  identity: {
    username: config.auth.username,
    password: config.auth.token
  },
  channels: config.channels
};


const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();
// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandNameraw = msg.trim();

  // Make all messages lowercase for those lads that are on mobile or just pressed shift by accident
  const commandName = commandNameraw.toLowerCase();
  
  // log chat since why not
  console.log("CHAT LOG: " + commandNameraw)
  
  if (commandNameraw === 'PogChamp') {
    client.say(target, `PogChamp`);
    console.log("PogChamp");
  }

    if (commandNameraw === '@OurGlitch') {
    client.say(target, `Heya !`);
    console.log("@OurGlitch");
  }
  
    if (commandNameraw === 'RaccAttack') {
    client.say(target, `RaccAttack`);
    console.log("RaccAttack");
  }
  
 }

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);

  // tell in the channel that we are on since why not
  client.say('OurGlitch', `chatbot connected.`);
}
