<demo>
    支持 level
</demo>
<template>
    <div>
        <div>
            <Button>默认按钮</Button>
            <Button level="main">主要按钮</Button>
            <Button level="success">成功按钮</Button>
            <Button level="message">信息按钮</Button>
            <Button level="warning">警告按钮</Button>
            <Button level="danger">危险按钮</Button>
        </div>
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