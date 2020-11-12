<template>
    <m-dialog :visible="visible" @update:visible="visible=$event"
              :closeOnClickOverlay="closeOnClickOverlay" :ok="f1" :cancel="f2"></m-dialog>
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
            const closeOnClickOverlay=ref(false);
            const f1=()=>{
                return false;
            }
            const f2=()=>{
            }
            return {visible,closeOnClickOverlay,f1,f2};
        }
    };
</script>

<style lang="scss" scoped>

</style>