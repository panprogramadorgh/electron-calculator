"use strict";

import { app, BrowserWindow } from "electron";
import setAppMenu from "./menu.js";

const createWindow = () => {
  const win = new BrowserWindow({ width: 400, height: 560, resizable: false });
  win.loadFile("./view/index.html");
};

setAppMenu();

app.whenReady().then(() => {
  createWindow();
});
