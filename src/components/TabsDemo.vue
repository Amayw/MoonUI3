<template>
    <div>tabs</div>
    <m-tabs v-model:selected="selected">
        <m-tab title="标题一11111">内容一</m-tab>
        <m-tab title="标题二">内容二</m-tab>
    </m-tabs>
</template>

<script lang="ts">
    import Tabs from '../lib/Tabs.vue';
    import Tab from '../lib/Tab.vue';
    import {ref} from 'vue'
    export default {
        name:'MoonTabsDemo',
        setup(){
            const selected=ref('标题二');
            return {selected}
        },
        components: {
            'm-tab':Tab,
            'm-tabs':Tabs
        }
    };
</script>

<style lang="scss" scoped>

</style>