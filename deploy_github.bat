@echo off
title Deploy to GitHub - Oceana Vibe
echo ========================================================
echo          DEPLOY PROYEK KE GITHUB REPOSITORY
echo ========================================================
echo.
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%LOCALAPPDATA%\Programs\Git\cmd;%LOCALAPPDATA%\Programs\gh;%PATH%"

echo [1/3] Melakukan build aset produksi (npm run build ^& standalone)...
call npm.cmd run build
if %errorlevel% neq 0 (
    echo [ERROR] Build gagal. Silakan periksa pesan error di atas.
    pause
    exit /b 1
)
call npm.cmd run standalone

echo.
echo [2/3] Menyiapkan commit git...
git add .
git commit -m "feat: complete Oceana Vibe beach tour website for preview and deployment" 2>nul
echo [OK] Git commit siap.
echo.

echo [3/3] Mengupload (Push) ke GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo [SUKSES] Proyek berhasil di-deploy ke GitHub!
    echo ========================================================
) else (
    echo.
    echo [INFO] Jika belum menghubungkan remote repository, jalankan:
    echo        git remote add origin https://github.com/solusilokal/Oceana-Vibe.git
)
echo.
pause
