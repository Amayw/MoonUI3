<demo>
    支持 size
</demo>
<template>
        <div>
            <Button size="big">大型按钮</Button>
            <Button>默认按钮</Button>
            <Button size="small">小型按钮</Button>
        </div>
        <div>
            <Button theme="link" size="big">大型链接</Button>
            <Button theme="link">默认链接</Button>
            <Button size="small" theme="link">小型链接</Button>
        </div>
        <div>
            <Button size="big" theme="text">大型文本</Button>
            <Button theme="text">默认文本</Button>
            <Button size="small" theme="text">小型文本</Button>
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