@echo off
goto loop

:loop
node bot.js
echo Bot stopped, Restarting.
echo Please tell forevertoo. (He will try to fix the code.)
goto loop
