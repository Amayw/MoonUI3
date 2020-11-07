import { createApp } from 'vue'
import App from './App.vue'
import Moon from './components/Moon.vue'
import './index.css'
import {createWebHistory,createRouter} from 'vue-router'

const history=createWebHistory();
const router=createRouter({
    history:history,
    routes:[
        {
            path:'/',
            component:Moon
        }
    ]
});
const app=createApp(App);
app.use(router);
app.mount('#app');
