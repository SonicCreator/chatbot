@echo off
echo (c) forevertoo
goto loop

:loop
node bot.js
echo Bot crashed, Restarting the bot...
goto loop
