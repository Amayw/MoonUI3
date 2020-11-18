<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <div class="demo">
            <h2>常规用法</h2>
            <div class="demo-component">
                <SwitchDemo1/>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre v-html="Prism.highlight(SwitchDemo1.__sourceCode,Prism.languages.html,'html')"/>
            </div>
        </div>
        <div class="demo">
            <h2>支持 disabled </h2>
            <div class="demo-component">
                <SwitchDemo2/>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
<!--                <pre>{{Prism.highlight(SwitchDemo2.__sourceCode,Prism.languages.html,'html')}}</pre>-->
                <pre v-html="Prism.highlight(SwitchDemo2.__sourceCode,Prism.languages.html,'html')"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import Button from '../lib/Button.vue';
    import {ref} from 'vue';
    import SwitchDemo1 from '../components/Switch.demo1.vue'
    import SwitchDemo2 from '../components/Switch.demo2.vue'
    import 'prismjs'
    import 'prismjs/themes/prism.css'

    const Prism=(window as any).Prism;
    export default {
        name: 'MoonSwitchDemo',
        setup() {
            const bool = ref(true);
            return {bool,SwitchDemo1, SwitchDemo2,Prism};
        },
        components: {
            Switch,
            Button,
            SwitchDemo1,
            SwitchDemo2,
        }
    };
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
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
            overflow: auto;
            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>