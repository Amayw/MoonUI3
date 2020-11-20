<demo>
    基本用法
</demo>
<template>
    <div>
        <Button>默认按钮</Button>
        <Button theme="link">默认链接</Button>
        <Button theme="text">默认文本</Button>
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