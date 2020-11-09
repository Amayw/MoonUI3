<template>
    <div>switch的文档哦</div>
    <Switch :value="checked" @input="checked=$event"></Switch>
</template>

<script>
    import Switch from '../lib/Switch.vue';
    import {ref} from 'vue';

    export default {
        name: 'SwitchDemo',
        setup() {
            const checked = ref(true);
            return {checked};
        },
        components: {
            Switch
        }
    };
</script>

<style lang="scss" scoped>

</style>