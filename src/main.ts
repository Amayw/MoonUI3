import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import {createWebHistory,createRouter} from 'vue-router'

const history=createWebHistory();
const router=createRouter({
    history:history,
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/doc',
            component:Doc,
            children:[
                {
                    path:'/doc/switch',
                    component:Switch
                },
                {
                    path:'/doc/button',
                    component:Button
                },
                {
                    path:'/doc/dialog',
                    component:Dialog
                },
                {
                    path:'/doc/tabs',
                    component:Tabs
                },
            ]
        }
    ]
});
const app=createApp(App);
app.use(router);
app.mount('#app');
