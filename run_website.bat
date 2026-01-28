@echo off
echo ==========================================
echo   Starting Tech Fest Website Setup & Run
echo ==========================================
cd /d "%~dp0"

echo [1/3] Checking Node.js installation...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found! Please install Node.js from https://nodejs.org/
    pause
    exit /b
)
echo Node.js is installed.

echo.
echo [2/3] Checking dependencies...
echo Installing required libraries...
call npm install framer-motion lucide-react clsx tailwind-merge @tailwindcss/postcss postcss @radix-ui/react-slot @splinetool/react-spline @splinetool/runtime three @types/three

echo.
echo [3/3] Starting Development Server...
echo The website will be available at http://localhost:3000
echo.
echo Starting browser in 5 seconds...
timeout /t 5 >nul
start "" "http://localhost:3000"

call npm run dev
pause
