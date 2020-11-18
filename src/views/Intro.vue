<template>
    <div>
        <article class="markdown-body" v-html="md">
        </article>
    </div>
</template>

<script>
    import md from '../markdown/intro.md'
    export default {
        data(){
            return {
                md
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>