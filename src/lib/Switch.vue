<template>
    <button :class="{checked:value}" @click="toggle"><span></span></button>
    {{checked}}
</template>

<script lang="ts">
    import {ref} from 'vue';
    export default {
        name:'Switch',
        props:{
            value:Boolean
        },
        setup(props,context){
            const toggle=()=>{
                context.emit('input',!props.value);
            }
            return {toggle};
        }
    };
</script>

<style lang="scss" scoped>
    $h:22px;
    $h2:$h - 4px;
    button{
        position:relative;
        width: 2*$h;
        height: $h;
        background-color: #666;
        border: none;
        outline: none;
        border-radius: $h/2;
        >span{
            position: absolute;
            width: $h2;
            height: $h2;
            background-color: #fff;
            border-radius: $h2/2;
            top: 2px;
            left: 2px;
            transition: left 0.25s;
        }

        &.checked{
            background-color: cornflowerblue;
            >span{
                animation: run 0.5s;
                left: calc(2*#{$h} - #{$h2} - 2px);
            }
        }

    }



</style>