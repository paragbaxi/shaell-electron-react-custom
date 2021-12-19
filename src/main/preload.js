const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  store: {
    get(key, func) {
      ipcRenderer.send('electron-store-get', key);
      ipcRenderer.on('electron-store-get', (event, arg) => func(arg));
    },
    set(key, val) {
      ipcRenderer.send('electron-store-set', key, val);
    },
  },
  ipcRenderer: {
    invoke: (channel, ...args) => {
      const validChannels = ['load-pref'];
      if (!validChannels.includes(channel)) return undefined;
      return ipcRenderer.invoke(channel, ...args);
    },
    on: (channel, func) => {
      const validChannels = ['send-test'];
      if (validChannels.includes(channel))
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    once: (channel, func) => {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel))
        ipcRenderer.once(channel, (event, ...args) => func(...args));
    },
    send: (channel, ...args) => {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) ipcRenderer.send(channel, ...args);
    },
  },
});
