<template>
    <div>buttons文档</div>
    <Button>button1</Button>
    <Button theme="a">button2</Button>
    <Button theme="b">button3</Button>
    <Button theme="c">button4</Button>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        name:'MoonButtonDemo',
        components:{
            Button
        },
        setup() {

        }
    };
</script>

<style lang="scss" scoped>

</style>