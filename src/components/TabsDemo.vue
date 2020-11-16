<template>
    <div>tabs</div>
    <m-tabs>
        <m-tab title="标题一">内容一</m-tab>
        <m-tab title="标题二">内容二</m-tab>
    </m-tabs>
</template>

<script lang="ts">
    import Tabs from '../lib/Tabs.vue';
    import Tab from '../lib/Tab.vue';
    export default {
        name:'MoonTabsDemo',
        components: {
            'm-tab':Tab,
            'm-tabs':Tabs
        }
    };
</script>

<style lang="scss" scoped>

</style>