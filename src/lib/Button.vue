<template>
    <button class="m-button" :class="{[`theme-${theme}`]:theme}">
        <slot/>
    </button>
</template>

<script lang="ts">
    export default {
        name: 'MoonButton',
        props:{
            theme:{
                type:String,
                default:'button'
            }
        }
    };
</script>

<style lang="scss" scoped>
    $h:32px;
    $border-color:#d9d9d9;
    $color:#333;
    $blue:#40a9ff;
    $radius:4px;
    .m-button{
        outline: none;
        border: 1px solid $border-color;
        width: 2*$h;
        height:$h;
        border-radius: $radius;
        color: $color;
        &.theme-a{
            border: 1px solid $blue;
        }
    }
</style>