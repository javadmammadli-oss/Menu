@echo off
cd /d "%~dp0"
git pull --rebase
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0bump.ps1"
git add -A
git commit -m "Menu update %date% %time%"
git push
echo.
echo Gonderildi. 1-2 deqiqeye sayt yenilenir, tablet 1-2 deqiqeye ozu goturur.
pause
