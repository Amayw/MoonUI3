<template>
    <div class="moon-tabs">
        <li v-for="(title,index) in titles" :key="index">{{title}}</li>
        <component v-for="(component,index) in defaults" :is="component" :key="index"></component>
    </div>
</template>

<script>
    import Tab from './Tab.vue'
    export default {
        name:'MoonTabs',
        setup(props,context){
            const defaults=context.slots.default();
            defaults.forEach(item=>{
                if(item.type!==Tab){
                    throw new Error('Tabs 子标签必须是Tab,而你写的是'+item.type)
                }
            })
            const titles=defaults.map((item)=>item.props.title)
            return {defaults,titles};
        }
    };
</script>

<style lang="scss">
    @import "src/index.scss";
    .moon-tabs{
        >ul{
            display: flex;
            >li{
                &.active-li{
                    color:$light-color;
                }
            }

        }
        >.moon-content{
            display:none;
            &.active-content{
                display: flex;
            }
        }
    }
</style>