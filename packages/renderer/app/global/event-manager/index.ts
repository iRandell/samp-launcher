import { ipcRenderer } from 'electron'

global.addEvent = (event, handler): any => {
  ipcRenderer.on(event, (_, ...args) => handler(...args))
}

global.invokeMain = (event, payload): any => {
  return ipcRenderer.invoke('REQUEST_DEFFERED', event, payload)
}

global.invokeMainUnilaterally = (eventName: string, payload): any => {
  ipcRenderer.send('REQUEST_UNILATERALLY', eventName, payload)
}
