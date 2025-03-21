import { createApp } from 'vue'
import App from './App.vue'
import { usePinia } from './store'
import './style.css'

import './spaghetti'


const app = createApp(App)

usePinia(app)

app.mount('#app')
