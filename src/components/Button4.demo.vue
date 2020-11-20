<demo>
    支持 disabled
</demo>
<template>
        <div>
            <Button disabled>默认按钮</Button>
            <Button disabled level="main">主要按钮</Button>
            <Button disabled level="success">成功按钮</Button>
            <Button disabled level="message">信息按钮</Button>
            <Button disabled level="warning">警告按钮</Button>
            <Button disabled level="danger">危险按钮</Button>
        </div>
        <div>
            <Button theme="link">默认链接</Button>
            <Button disabled theme="link">禁用链接</Button>
        </div>
        <div>
            <Button theme="text">默认文本</Button>
            <Button disabled theme="link">禁用文本</Button>
        </div>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";
    export default {
        components: {
            Button
        }
    }
</script>