<template>
    <button class="m-button" :class="{[`m-theme-${theme}`]:theme}">
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

<style lang="scss">
    $h:32px;
    $border-color:#d9d9d9;
    $color:#333;
    $blue:#40a9ff;
    $radius:4px;
    .m-button{
        box-sizing: border-box;
        border: 1px solid $border-color;
        padding: 0 12px;
        height:$h;
        border-radius: $radius;
        color: $color;
        cursor: pointer;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        box-shadow: 0 1px 0 fade_out(black, 0.95);
        &+&{
            margin-left:8px;
        }
        &:hover,
        &:focus{
            color:$blue;
            border-color:$blue;
        }
        &:focus{
            outline:none;
        }
        &::-moz-focus-inner{
            border: 0;
        }
    }
</style>