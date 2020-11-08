<template>
    <TopNav/>
    <div class="content">
        <aside>边栏</aside>
        <main>内容</main>
    </div>
</template>

<script>
    import TopNav from '../components/TopNav.vue';
    export default {
        name:'Doc',
        components: {TopNav}
    };
</script>

