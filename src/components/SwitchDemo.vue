<template>
    <div>switch的文档哦</div>
    <Switch v-model:value="bool"></Switch>
</template>

<script>
    import Switch from '../lib/Switch.vue';
    import {ref} from 'vue';

    export default {
        name: 'SwitchDemo',
        setup() {
            const bool = ref(true);
            return {bool};
        },
        components: {
            Switch
        }
    };
</script>

<style lang="scss" scoped>

</style>