<template>
    <div>buttons文档</div>
    <div>
        <Button>button1</Button>
        <Button theme="button">button2</Button>
        <Button theme="link">button3</Button>
        <Button theme="text">button4</Button>
    </div>
    <div>
        <Button size="big" theme="link">button1</Button>
        <Button size="normal" theme="link">button2</Button>
        <Button size="small" theme="link">button3</Button>
    </div>
    <div>
        <Button size="big" level="main">button1</Button>
        <Button size="normal" level="normal">button2</Button>
        <Button size="small" level="danger">button3</Button>
    </div>
    <div>
        <Button theme="text" size="big" level="main">button1</Button>
        <Button theme="text" size="normal" level="normal">button2</Button>
        <Button theme="text" size="small" level="danger">button3</Button>
    </div>
    <div>
        <Button theme="button" disabled>button1</Button>
        <Button theme="link" :disabled="true">button2</Button>
        <Button theme="text" :disabled="true">button3</Button>
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