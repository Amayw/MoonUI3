import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import {createWebHistory,createRouter} from 'vue-router'
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStart from './markdown/get-start.md'

import {h} from 'vue'

const md=(name)=>{
    return h(Markdown,{content:name,key:name})
}

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
                    redirect:'/doc/intro'
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
                    component:md(intro)
                },
                {
                    path:'install',
                    component:md(install)
                },
                {
                    path:'getstart',
                    component:md(getStart)
                }
            ]
        }
    ]
});

export {router};