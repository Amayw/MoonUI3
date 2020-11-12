<template>
    <div class="moon-overlay"></div>
    <div class="moon-dialog">
        <header>标题</header>
        <main>
            <p>第一行</p>
            <p>第二行</p>
        </main>
        <footer>
            <m-button>取消</m-button>
            <m-button>确认</m-button>
        </footer>
    </div>
</template>

<script>
    import Button from './Button.vue'
    export default {
        name:'MoonDialog',
        components:{
            'm-button':Button
        }
    };
</script>

<style lang="scss">

</style>