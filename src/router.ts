import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import Docdefault from './components/Docdefault.vue'
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
                    path:'',
                    component:Docdefault
                },
                {
                    path:'switch',
                    component:Switch
                },
                {
                    path:'button',
                    component:Button
                },
                {
                    path:'dialog',
                    component:Dialog
                },
                {
                    path:'tabs',
                    component:Tabs
                },
            ]
        }
    ]
});

export {router};