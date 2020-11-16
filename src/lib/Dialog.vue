<template>
    <teleport to="body">
        <template  v-if="visible">
            <div class="moon-dialog-overlay"  @click="clickOverlay"></div>
            <div class="moon-dialog-wrapper">
                <div class="moon-dialog">
                    <header>
                        <slot name="title"></slot>
                        <span class="moon-dialog-close" @click="closeDialog"></span></header>
                    <main>
                        <slot name="content"></slot>
                    </main>
                    <footer>
                        <m-button level="main"  @click="ok">确认</m-button>
                        <m-button  @click="cancel">取消</m-button>
                    </footer>
                </div>
            </div>
        </template>
    </teleport>
</template>

<script lang="ts">
    import Button from './Button.vue'
    export default {
        name:'MoonDialog',
        components:{
            'm-button':Button
        },
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            closeOnClickOverlay:{
                type:Boolean,
                default: true
            },
            ok:{
                type:Function
            },
            cancel:{
                type:Function
            },
            title:{
                type:String
            }
        },
        setup(props,context){
            const closeDialog=()=>{
                context.emit('update:visible',false);
            }

            const clickOverlay=()=>{
                if(props.closeOnClickOverlay){
                    closeDialog();
                }
            }

            const ok=()=>{
                if(props.ok?.()){
                    closeDialog();
                }
            }

            const cancel=()=>{
                if(props.cancel?.()){
                    closeDialog();
                }
            }
            return {closeDialog,clickOverlay,ok,cancel}
        }
    };
</script>

<style lang="scss">
    $radius: 4px;
    $border-color: #d9d9d9;
    .moon-dialog {
        background: white;
        border-radius: $radius;
        box-shadow: 0 0 3px fade_out(black, 0.5);
        min-width: 15em;
        max-width: 90%;
        &-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: fade_out(black, 0.5);
            z-index: 10;
        }
        &-wrapper {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 11;
        }
        >header {
            padding: 12px 16px;
            border-bottom: 1px solid $border-color;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
        }
        >main {
            padding: 12px 16px;
        }
        >footer {
            border-top: 1px solid $border-color;
            padding: 12px 16px;
            text-align: right;
        }
        &-close {
            position: relative;
            display: inline-block;
            width: 16px;
            height: 16px;
            cursor: pointer;
            &::before,
            &::after {
                content: '';
                position: absolute;
                height: 1px;
                background: black;
                width: 100%;
                top: 50%;
                left: 50%;
            }
            &::before {
                transform: translate(-50%, -50%) rotate(-45deg);
            }
            &::after {
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }

</style>