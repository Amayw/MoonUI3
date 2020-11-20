<demo>
    支持 disabled
</demo>

<template>
    <div>
        <Switch v-model:value="bool1" disabled />
        <Switch v-model:value="bool2" disabled />
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue'
    import {
        ref
    } from 'vue'
    export default {
        components: {
            Switch,
        },
        setup() {
            const bool1 = ref(true);
            const bool2 = ref(false);
            return {
                bool1,bool2
            }
        }
    }
</script>