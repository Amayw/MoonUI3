<template>
    <div>Switch 示例</div>
    <Demo :component="SwitchDemo1"></Demo>
    <Demo :component="SwitchDemo2"></Demo>
</template>

<script lang="ts">
    import SwitchDemo1 from '../components/Switch.demo1.vue'
    import SwitchDemo2 from '../components/Switch.demo2.vue'
    import Demo from '../components/Demo.vue'
    export default {
        name: 'MoonSwitchDemo',
        setup() {
            return{
                SwitchDemo1,
                SwitchDemo2,
            }
        },
        components: {
            Demo
        }
    };
</script>