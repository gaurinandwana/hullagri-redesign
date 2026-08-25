const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

let mainWindow;
let pythonProcess = null;
const BACKEND_PORT = 8000;

function getPythonExecutable() {
  let venvPath = '';
  if (app.isPackaged) {
    venvPath = path.join(process.resourcesPath, 'backend', 'venv');
  } else {
    venvPath = path.join(__dirname, 'backend', 'venv');
  }

  const winVenvPython = path.join(venvPath, 'Scripts', 'python.exe');
  const unixVenvPython = path.join(venvPath, 'bin', 'python');

  if (fs.existsSync(winVenvPython)) {
    return winVenvPython;
  } else if (fs.existsSync(unixVenvPython)) {
    return unixVenvPython;
  }

  return process.platform === 'win32' ? 'python' : 'python3';
}

function getBackendExecutable() {
  let backendDir = app.isPackaged 
    ? path.join(process.resourcesPath, 'backend') 
    : path.join(__dirname, 'backend');

  const winBin = path.join(backendDir, 'dist', 'main', 'main.exe');
  const winBinAlt = path.join(backendDir, 'dist', 'main.exe');
  const unixBin = path.join(backendDir, 'dist', 'main', 'main');
  const unixBinAlt = path.join(backendDir, 'dist', 'main');

  if (fs.existsSync(winBin)) return { bin: winBin, usePython: false };
  if (fs.existsSync(winBinAlt)) return { bin: winBinAlt, usePython: false };
  if (fs.existsSync(unixBin)) return { bin: unixBin, usePython: false };
  if (fs.existsSync(unixBinAlt)) return { bin: unixBinAlt, usePython: false };

  return { bin: getPythonExecutable(), usePython: true };
}

function startBackend() {
  const { bin, usePython } = getBackendExecutable();
  
  let backendDir = app.isPackaged 
    ? path.join(process.resourcesPath, 'backend') 
    : path.join(__dirname, 'backend');

  console.log(`[Main] Spawning backend. Binary: ${bin}, usePython: ${usePython}`);
  console.log(`[Main] Working directory: ${backendDir}`);

  if (!fs.existsSync(backendDir)) {
    backendDir = path.join(app.getAppPath(), 'backend');
  }

  let args = [];
  let execBin = bin;

  if (usePython) {
    args = [
      '-m', 'uvicorn', 
      'main:app', 
      '--host', '127.0.0.1', 
      '--port', String(BACKEND_PORT)
    ];
  } else {
    args = [String(BACKEND_PORT)];
  }

  pythonProcess = spawn(execBin, args, {
    cwd: backendDir,
    env: {
      ...process.env,
      PYTHONUNBUFFERED: '1'
    }
  });

  pythonProcess.stdout.on('data', (data) => {
    console.log(`[Backend API]: ${data.toString().trim()}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`[Backend API Error]: ${data.toString().trim()}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`[Backend API] Process exited with code ${code}`);
    pythonProcess = null;
  });
}

function killBackend() {
  if (pythonProcess) {
    console.log('[Main] Terminating Python backend process...');
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', pythonProcess.pid, '/f', '/t']);
    } else {
      pythonProcess.kill('SIGTERM');
    }
    pythonProcess = null;
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 850,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    },
    title: "HullAgri AI Farmer Scheme Intelligence",
    autoHideMenuBar: true,
    show: false
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (!app.isPackaged) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  ipcMain.handle('get-api-url', () => {
    return `http://127.0.0.1:${BACKEND_PORT}`;
  });

  startBackend();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('will-quit', () => {
  killBackend();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
