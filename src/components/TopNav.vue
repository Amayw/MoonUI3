<template>
    <div class="topNavWrapper">
        <div class="logo" @click="changeVisible">
            <img src="src/assets/logo.jpg"/>
        </div>
        <div class="topNav">
            <router-link to="/">主页</router-link>
            <router-link to="/doc">文档</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {inject,Ref} from 'vue';
    export default {
        name:'TopNav',
        setup(){
            const menuVisible=inject<Ref<boolean>>('menuVisible');
            const changeVisible=()=>{
                menuVisible.value=!menuVisible.value;
            }
            return {changeVisible};
        },
    };
</script>

<style lang="scss" scoped>
    @import "src/index.scss";
    .topNavWrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        color: #424a63;
        font-size: 20px;
        >.logo{
            display: flex;
            align-items: center;
            >img{
                width: 40px;
                height:40px;
                margin-right: 10px;
            }
        }
        >.topNav{
            >a{
                &:hover{
                    border-bottom: 2px solid $light-color;
                }
                &:not(last-child){
                    margin-right:10px;
                }
            }

        }
    }
</style>