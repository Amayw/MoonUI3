<template>
    <svg class="icon">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
    export default {
        name:"MoonIcon",
        props:{
            icon:{
                type:String
            }
        }
    };
</script>

<style lang="scss">
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>