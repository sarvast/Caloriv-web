@echo off
echo ========================================
echo   Caloriv Website - Git Push Script
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Adding all files...
git add .

echo.
echo [2/4] Checking status...
git status

echo.
echo [3/4] Creating commit...
git commit -m "Complete Caloriv website: SEO, docs, responsive design"

echo.
echo [4/4] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo   Done! Check GitHub repository.
echo ========================================
pause
