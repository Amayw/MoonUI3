<template>
    <div>switch的文档哦</div>
    <m-switch v-model:value="bool"></m-switch>
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
            'm-switch':Switch
        }
    };
</script>

<style lang="scss" scoped>

</style>