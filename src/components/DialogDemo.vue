<template>
    <m-dialog :visible="visible"></m-dialog>
    <m-button @click="visible=!visible">toggle</m-button>
</template>

<script>
    import Dialog from '../lib/Dialog.vue'
    import Button from '../lib/Button.vue'
    import {ref} from 'vue'
    export default {
        name:'MoonDialogDemo',
        components:{
            'm-dialog':Dialog,
            'm-button':Button
        },
        setup(){
            const visible=ref(false);
            return {visible};
        }
    };
</script>

<style lang="scss" scoped>

</style>