<template>
    <div>buttons文档</div>
    <div>
        <Button>button1</Button>
        <Button theme="button">button2</Button>
        <Button theme="link">button3</Button>
        <Button theme="text">button4</Button>
    </div>
    <div>
        <Button size="big">button1</Button>
        <Button size="normal">button2</Button>
        <Button size="small">button3</Button>
    </div>
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