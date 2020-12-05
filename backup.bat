@echo off
echo https://github.com/SonicCreator/chatbot/
goto loop

:loop
node bot.js
echo Bot crashed, Restarting the bot...
goto loop
