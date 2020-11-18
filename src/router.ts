import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Docdefault from './components/Docdefault.vue'
import {createWebHistory,createRouter} from 'vue-router'
import Markdown from './components/Markdown.vue';
import {h} from 'vue'

const md=(name)=>{
    return h(Markdown,{path:`../markdown/${name}.md`,key:name})
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
                    component:md('intro')
                },
                {
                    path:'install',
                    component:md('install')
                },
                {
                    path:'getstart',
                    component:md('get-start')
                }
            ]
        }
    ]
});

export {router};