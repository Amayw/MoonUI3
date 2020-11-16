<template>
    <div class="moon-tabs">
        <div class="moon-tabs-nav">
            <div :class="selected===index?'active':''" class="moon-tabs-nav-item" v-for="(title,index) in titles" :key="index">{{title}}</div>
        </div>
        <div class="moon-tabs-content">
            <component :class="selected===index?'active':''" class="moon-tabs-content-item" v-for="(component,index) in defaults" :is="component" :key="index"></component>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import {ref} from 'vue'
    export default {
        name:'MoonTabs',
        // props:{
        //     selected:{
        //         type:String,Number
        //     }
        // },
        setup(props,context){
            const defaults=context.slots.default();
            defaults.forEach(item=>{
                if(item.type!==Tab){
                    throw new Error('Tabs 子标签必须是Tab,而你写的是'+item.type)
                }
            })
            const titles=defaults.map((item)=>item.props.title)
            const selected=ref(1);
            return {defaults,titles,selected};
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
        }

    }
</style>