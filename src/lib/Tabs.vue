<template>
    <div class="moon-tabs">
        <div class="moon-tabs-nav" ref="container">
            <div :ref="el => { if (selected===title) selectedItem=el }" @click="select(title)" :class="selected===title?`active`:''" class="moon-tabs-nav-item" v-for="(title,index) in titles" :key="index">{{title}}
            </div>
            <div class="moon-tabs-nav-bottom" ref="indicator"></div>
        </div>
        <div class="moon-tabs-content">
            <component :class="{'active':selected===component.props.title}" v-for="(component,index) in defaults" class="moon-tabs-content-item" :is="component" :key="index"></component>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import {ref,watchEffect} from 'vue'
    export default {
        name:'MoonTabs',
        props:{
            selected:{
                type:String,
            }
        },
        setup(props,context){
            const defaults=context.slots.default();

            defaults.forEach(item=>{
                if(item.type!==Tab){
                    throw new Error('Tabs 子标签必须是Tab,而你写的是'+item.type)
                }
            })

            const titles=defaults.map((item)=>item.props.title)
            const select=(title)=>{
                context.emit('update:selected',title);
            }

            const selectedItem = ref<HTMLDivElement>(null);
            const indicator=ref<HTMLDivElement>(null);
            const container=ref<HTMLDivElement>(null);
            watchEffect(()=>{
                const {width,left}=selectedItem.value.getBoundingClientRect();
                indicator.value.style.width=width+'px';
                indicator.value.style.left=(left-container.value.getBoundingClientRect().left)+'px';
            })
            return {defaults,titles,select,selectedItem,indicator,container};
        }
    };
</script>

<style lang="scss">
    @import "src/index.scss";
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .moon-tabs{
        &-nav{
            position: relative;
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            &-item{
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                &:first-child {
                    margin-left: 0;
                }
                &.active{
                    color:$blue;
                }
            }
            &-bottom{
                height: 3px;
                background: $blue;
                position: absolute;
                left: 0;
                bottom: -1px;
                transition: all 250ms;
            }

        }
        &-content {
            padding: 8px 0;
            &-item{
                display: none;
                &.active{
                    display: block;
                }
            }

        }

    }
</style>