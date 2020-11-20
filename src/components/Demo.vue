<template>
    <div>
        <div class="demo">
            <h2>{{title}}</h2>
            <div class="demo-component">
                <component :is="component" />
            </div>
            <div class="demo-actions">
                <Button  @click="codeVisible=!codeVisible">查看代码</Button>
            </div>
            <div v-if="codeVisible" class="demo-code">
                <pre v-html="html"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue';
    import 'prismjs'
    import 'prismjs/themes/prism.css'
    import {computed,ref} from 'vue'

    const Prism=(window as any).Prism;
    export default {
        name: 'MoonDemo',
        props:{
            component:{
                type:Object
            },
            title:{
                type: String
            }
        },
        setup(props) {
            const html=computed(()=>{
                return Prism.highlight(props.component.__sourceCode,Prism.languages.html,'html')
            })
            const title=props.component.__sourceCodeTitle;
            const codeVisible=ref(false);
            return {Prism,html,title,codeVisible};
        },
        components: {
            Button,
        }
    };
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 32px;
        >h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }
        &-discribe{
            font-size: 14px;
        }
        &-component {
            padding: 16px;
        }
        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }
        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            >pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }

    }
</style>