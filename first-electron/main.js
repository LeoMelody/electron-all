const {
  app,
  BrowserWindow
} = require("electron")

app.allowRendererProcessReuse = true

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile("index.html")
}

app.whenReady().then(createWindow)
