import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import vuetify from 'vite-plugin-vuetify'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
  .$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})

