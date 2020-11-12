<template>
    <m-dialog :visible="visible" @update:visible="visible=$event"
              :closeOnClickOverlay="closeOnClickOverlay" :ok="f1" :cancel="f2">
        <template v-slot:title>
            <p>真的吗？</p>
        </template>
        <template v-slot:content>
            <p>我想吃芋圆了</p>
        </template>
    </m-dialog>
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
            const title=ref('真的吗');
            const content=ref('薛定谔的猫');
            const f1=()=>{
                return false;
            }
            const f2=()=>{
                return true;
            }
            return {visible,closeOnClickOverlay,f1,f2,title,content};
        }
    };
</script>

<style lang="scss" scoped>

</style>