const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Electron App',
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl = path.join(__dirname, 'index.html');

  mainWindow.loadFile(startUrl);
}

app.whenReady().then((createMainWindow))

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});