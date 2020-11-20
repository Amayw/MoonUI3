import { createApp } from 'vue'
import './lib/index.scss'
import './index.scss'
import App from './App.vue'
import {router} from './router'
import 'github-markdown-css'
import './assets/svg'


const app=createApp(App);
app.use(router);
app.mount('#app');