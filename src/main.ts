import { createApp } from 'vue'
import axios from './plugin/axios'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(axios)
app.mount('#app')
