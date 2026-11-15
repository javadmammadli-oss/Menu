@echo off
cd /d "%~dp0"
git add -A
git commit -m "Menu update %date% %time%"
git push
echo.
echo Gonderildi. 1-2 deqiqeye sayt yenilenir, tablet 5 deqiqeye ozu goturur.
pause
