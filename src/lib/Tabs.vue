<template>
    <div class="moon-tabs">
        <div class="moon-tabs-nav">
            <div @click="select(title)" :class="selected===title?'active':''" class="moon-tabs-nav-item" v-for="(title,index) in titles" :key="index">{{title}}</div>
        </div>
        <div class="moon-tabs-content">
            <component :class="{'active':selected===component.props.title}" v-for="(component,index) in defaults" class="moon-tabs-content-item" :is="component" :key="index"></component>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import {computed} from 'vue'
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
            return {defaults,titles,select};
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
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            &-item{
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.active{
                    color:$blue;
                }
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