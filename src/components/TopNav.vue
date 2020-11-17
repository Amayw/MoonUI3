<template>
       <div class="topNavWrapper">
           <div v-if="detailVisible" class="detail" @click="changeVisible">
               <img src="../assets/detail.png"/>
           </div>
           <router-link to="/" class="logo">
               <img src="../assets/logo.jpg"/>
           </router-link>
           <div class="topNav">
               <router-link to="/doc">文档</router-link>
           </div>
       </div>
</template>

<script lang="ts">
    import {inject,Ref} from 'vue';
    export default {
        name:'TopNav',
        props:{
          detailVisible:{
              type:Boolean,
              default:false
          }
        },
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
    $light-color: #fcd75a;
    $dark-color:#424a63;
    .topNavWrapper{
        >.detail{
            display: none;
            img{
                width: 40px;
                height:40px;
            }
        }
        border: 1px solid rosybrown;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        color: #424a63;
        font-size: 20px;
        >.logo{
            margin-left: 50%;
            transform: translateX(-50%);
            >img{
                width: 40px;
                height:40px;
                border-radius: 20px;
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

    @media(max-width: 500px){
        .topNavWrapper{
            position: relative;
            >.detail{
                display: inline-block;
                position: absolute;
                left: 0;
                top: 5px;
            }
            >.topNav{
                display: none;
            }
        }
    }
</style>