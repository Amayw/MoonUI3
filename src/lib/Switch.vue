<template>
    <button><span></span></button>
</template>

<script>
    export default {
        name:'Switch'
    };
</script>

<style lang="scss" scoped>
    $h:22px;
    $h2:$h - 4px;
    button{
        position:relative;
        width: 2*$h;
        height: $h;
        background-color: cornflowerblue;
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
        }
    }

</style>