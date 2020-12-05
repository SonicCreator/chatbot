// Tell pterodactyl that "yo, container do be running bro"
console.info("done")

// Log Copyright notice
console.info("----------------------------------------------------");
console.info("           CONTROLMYBOT                             ");
console.info("           https://cmpc.live                        ");
console.info("           © 2020 controlmypc                       ");
console.info("           by CMPC Developers                       ");
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

  if (commandName === 'nightbot') {
    client.say(target, `/me DONT TALK ABOUT HIM HERE OK, HE'S RUDE`);
    console.log("nightbot");
  }
  
  if (commandNameraw === 'PogChamp') {
    client.say(target, `PogChamp`);
    console.log("PogChamp");
  }

    if (commandNameraw === 'pog') {
    client.say(target, `PogChamp`);
    console.log("pog");
  }

  if (commandName === '!racc') {
    client.say(target, `RaccAttack`);
    console.log("!racc");
  }
  
  if (commandNameraw === 'RaccAttack') {
    client.say(target, `RaccAttack`);
    console.log("RaccAttack");
  }
    
  if (commandName === 'e') {
    client.say(target, `/me E`);
    console.log("e");
  }

  if (commandName === 'cheese') {
    client.say(target, `/me bonk.. cheese StinkyCheese`);
    console.log("cheese");
  }

  if (commandName === '!testconn') {
    client.say(target, `hi there dude!`);
    console.log("!testconn");
  }

  if (commandName.startsWith('!modalert')) {
    client.say(target, `/me The mods have been notified. (pls dont use this command to spam, you will be banned.) Note that if the script is not working, this will not work, and its best to go to the !discord and tell one of the mods.`);
    console.log("!modalert");
  }

  if (commandName === '!web') {
    client.say(target, `${config.domain} >> offical website of controlmypc`);
    console.log("web");
  }

  if (commandName === '!website') {
    client.say(target, `${config.domain} >> offical website of controlmypc`);
    console.log("website");
  }


  if (commandName === 'type ***') {
    client.say(target, `/me  Dinkus (***) strikes again. He appears when twitch blocks a link, try to split your link like: type google and type .com`);
    console.log("type ***");
  }
  
  if (commandName === '!help') {
    client.say(target, `/me PLEASE READ THE RULES FIRST (in the twitch panels) before you go here for the commands: ${config.domain}/commands`);
    console.log("!help");
  }

  if (commandName === '!commands') {
    client.say(target, `Commands: ${config.domain}/commands`);
    console.log("!help");
  }

  if (commandName === '!seizure') {
    client.say(target, `/me if your reading this, max likley ran the command so, he has seizures, so if something might make him have one, he can close it, so pretty much if he is watching dont fucking show the shit. Simple as that.`);
    console.log("!seizure");
  }
  
  if (commandName === '!timelapse') {
    client.say(target, `/me Timelapses from season 2: ${config.domain}/s2t Timelapses from season 1: ${config.domain}/s1t`);
    console.log("!timelapse");
  }

  if (commandName === '!request') {
    client.say(target, `/me You can request Commands/Achievements here: ${config.domain}/request`);
    console.log("!request");
  }
  
  if (commandName === 'PAIN') {
    client.say(target, `/me PAIN`);
    console.log("pain");
  }

  if (commandName === '!faq 1') {
    client.say(target, `NO you must follow the rules! Check below the stream to see them!`);
    console.log("faq1");
  }

  if (commandName === '!faq 2') {
    client.say(target, `This can have several reasons, since there pretty long, and the message would clog up the chat, check below the stream to see the full list. If you cant quite tell, !modalert will alert the mods.`);
    console.log("faq2");
  }

  if (commandName === '!faq 3') {
    client.say(target, `No of course not, this pc is owned by twitch chat.`);
    console.log("faq3");
  }

  if (commandName === '!faq 4') {
    client.say(target, `8 core xeon cpu 2.3ghz, 12gb ram, gtx 1080`);
    console.log("faq4");
  }

  if (commandName === '!faq 5') {
    client.say(target, `Fill out the following form, and we will look into it! Form: ${config.domain}/mod`);
    console.log("faq5");
  }

  if (commandName === '!faq 6') {
    client.say(target, `We brewed together this program, chatbot, website and all the parts of this, you can see them below the stream.`);
    console.log("faq6");
  }

  if (commandName === '!faq 69') {
    client.say(target, `Nice.`);
    console.log("rule69");
  }

  if (commandName === '!faq 420') {
    client.say(target, `Nice.`);
    console.log("rule420");
  }

  if (commandName === '!discord') {
    client.say(target, `${config.domain}/discord`);
    console.log("discord");
  }

  if (commandName === '!rule 1') {
    client.say(target, `NO P*RN. PERIOD.`);
    console.log("rule1");
  }

  if (commandName === '!rule 2') {
    client.say(target, `Do not shutdown the stream, script or computer.`);
    console.log("rule2");
  }

  if (commandName === '!rule 3') {
    client.say(target, `You are allowed to download stuff, but no virus or malware.`);
    console.log("rule3");
  }

  if (commandName === '!rule 4') {
    client.say(target, `Do not stream any copyrighted content (netflix, movies) However, music is fine.(until we get DMCA'ed)`);
    console.log("rule4");
  }

  if (commandName === '!rule 5') {
    client.say(target, `Ask other people in chat before using the quit/close tab command (this will not lead to a permaban if its a first time offense like the other rules, however it will likley lead to a timeout.)`);
    console.log("rule5");
  }

  if (commandName === '!abq') {
    client.say(target, `Ask other people in chat before using the quit/close tab command (this will not lead to a permaban if its a first time offense like the other rules, however it will likley lead to a timeout.)`);
    console.log("ask before quit fuckhead");
  }

  if (commandName === '!rule 6') {
    client.say(target, `NO remove access software including but not limited to zoom, teamviewer, VNC, and ssh`);
    console.log("rule6");
  }

  if (commandName === '!rule 7') {
    client.say(target, `NO cryptocurrency mining.`);
    console.log("rule7");
  }

  if (commandName === '!veto') {
    client.say(target, `Mods have the right to veto any action on the computer if they feel the action can cause harm or may lead to a possible twitch ban.`);
    console.log("veto");
  }

  if (commandName === '!rule 8') {
    client.say(target, `Dont mess around in core system settings, like gpedit or task scheduler.`);
    console.log("rule8");
  }

  if (commandName === '!rule 9') {
    client.say(target, `Dont delete system32 pls thnx!`);
    console.log("rule9");
  }

  if (commandName === '!rule 10') {
    client.say(target, `Most important of all, use common sense and dont be a dick.`);
    console.log("rule10");
  }

  if (commandName === '!rule 69') {
    client.say(target, `Nice.`);
    console.log("rule69");
  }

  if (commandName === '!rule 420') {
    client.say(target, `Nice.`);
    console.log("rule420");
  }

  if (commandName === '!dbat') {
    client.say(target, `Use common sense and dont be a dick.`);
    console.log("dont be a dickkkk");
  }

  if (commandName === '!ams') {
    client.say(target, `${config.domain}/amongusshortcuts`);
    console.log("among us shortcuts");
  }
  
 }

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);

  // tell in the channel that we are on since why not
  client.say('controlmypc', `chatbot connected.`);
}
