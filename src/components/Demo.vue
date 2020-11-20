<template>
    <div>
        <div class="demo">
            <h2>{{title}}</h2>
            <div class="demo-component">
                <component :is="component"/>
            </div>
            <div v-if="codeVisible===false"  @click="codeVisible=!codeVisible" class="demo-actions">
                <Icon icon="detail1"></Icon>
                <span>查看代码</span>
            </div>
            <div v-if="codeVisible" class="demo-code">
                <pre v-html="html"/>
            </div>
            <div v-if="codeVisible"  @click="codeVisible=!codeVisible" class="demo-actions">
                <Icon icon="detail2"></Icon>
                <span>隐藏代码</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import 'prismjs';
    import 'prismjs/themes/prism.css';
    import {computed, ref} from 'vue';
    import Icon from './Icon.vue'

    const Prism = (window as any).Prism;
    export default {
        name: 'MoonDemo',
        props: {
            component: {
                type: Object
            },
            title: {
                type: String
            }
        },
        setup(props) {
            const html = computed(() => {
                return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
            });
            const title = props.component.__sourceCodeTitle;
            const codeVisible = ref(false);
            return {Prism, html, title, codeVisible};
        },
        components: {
            Icon
        }
    };
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 32px 16px;

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;
            > div {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                vertical-align: center;
            }
        }

        &-actions {
            color: #94a5e3;
            padding:16px;
            border-top: 1px dashed $border-color;
            text-align: center;
            cursor: pointer;
            >span{
                margin-left: 8px;
            }
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