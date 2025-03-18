@echo off
:: Activate conda environment
call conda activate ml

:: Start FastAPI server in the background
start uvicorn src.lib.server.main:app --host=0.0.0.0 --port=8001 --reload

:: Start Svelte server
npm run dev
