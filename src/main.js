import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import 'bootstrap'

createApp(App).use(router).mount('#app')
