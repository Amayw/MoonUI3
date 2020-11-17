import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Docdefault from './components/Docdefault.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStart from './views/GetStart.vue'
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
                {
                    path:'intro',
                    component:Intro
                },
                {
                    path:'install',
                    component:Install
                },
                {
                    path:'getstart',
                    component:GetStart
                }
            ]
        }
    ]
});

export {router};