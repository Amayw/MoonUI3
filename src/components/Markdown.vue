<template>
    <article class="markdown-body" v-html="content">
    </article>
</template>

<script lang="ts">
    export default {
        name:'MoonMarkdown',
        props:{
            content:{
                type:String
            }
        },
        setup(props){
        }
    }
</script>

<style lang="scss" scoped>

</style>