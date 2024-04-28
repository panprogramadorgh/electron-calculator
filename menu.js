import { Menu } from "electron";

export default function setAppMenu() {
  const template = [];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
