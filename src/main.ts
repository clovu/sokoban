import { createApp } from 'vue'
import App from './App.vue'
import { usePinia } from './store'
import './style.css'


const app = createApp(App)

usePinia(app)

app.mount('#app')