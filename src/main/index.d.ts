/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    electron: ElectronAPI;
  }
}

export interface ElectronAPI {
  store: {
    get: (key: string, func: any) => void;
    set: (key: string, val: any) => void;
  };
  ipcRenderer: {
    invoke: (channel: string, ...args: any[]) => Promise<any>;
    on(channel: string, func: any): void;
    once(channel: string, func: any): void;
    send: (channel: string, ...args: any[]) => void;
  };
}
