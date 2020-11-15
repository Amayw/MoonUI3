<template>
    <div>buttons文档</div>
    <div>
        <m-button>button1</m-button>
        <m-button theme="button">button2</m-button>
        <m-button theme="link">button3</m-button>
        <m-button theme="text">button4</m-button>
    </div>
    <div>
        <m-button size="big" theme="link">button1</m-button>
        <m-button size="normal" theme="link">button2</m-button>
        <m-button size="small" theme="link">button3</m-button>
    </div>
    <div>
        <m-button size="big" level="main">button1</m-button>
        <m-button size="normal" level="normal">button2</m-button>
        <m-button size="small" level="danger">button3</m-button>
    </div>
    <div>
        <m-button theme="text" size="big" level="main">button1</m-button>
        <m-button theme="text" size="normal" level="normal">button2</m-button>
        <m-button theme="text" size="small" level="danger">button3</m-button>
    </div>
    <div>
        <m-button theme="button" disabled>button1</m-button>
        <m-button theme="link" :disabled="true">button2</m-button>
        <m-button theme="text" :disabled="true">button3</m-button>
    </div>
    <div>
        <m-button loading>button1</m-button>
        <m-button :loading="false">button2</m-button>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        name:'MoonButtonDemo',
        components:{
            'm-button':Button
        },
        setup() {

        }
    };
</script>

<style lang="scss" scoped>

</style>