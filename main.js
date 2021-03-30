const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false, // don't allow node API features to be accessed from electron window
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html');
};

if(isDev) {
        // allows immediate re-rendering after new changes have been made
        require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

ipcMain.on('notify', (_, message) => {
    new Notification({title: 'Notification', body: message}).show();
})

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })