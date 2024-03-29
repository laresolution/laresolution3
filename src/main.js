import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import './styles/index.css'

loadFonts()

createApp(App)
  .use(router)
  .mount('#app')
