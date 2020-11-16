<template>
    <div>
        <li>{{title}}</li>
        <slot/>
    </div>
</template>

<script>
    export default {
        name:'MoonTab',
        props:{
            title:{
                type:String
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>