<template>
   <div class="topWrapper">
       <div class="detail" @click="changeVisible">
           <img src="../assets/detail.png"/>
       </div>
       <div class="topNavWrapper">
           <router-link to="/" class="logo">
               <img src="../assets/logo.jpg"/>
           </router-link>
           <div class="topNav">
               <router-link to="/doc">文档</router-link>
           </div>
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
    $light-color: #fcd75a;
    $dark-color:#424a63;
    .topWrapper{
        display: flex;
        align-items: center;

        >.detail{
            display: none;
            img{
                width: 40px;
                height:40px;
            }
        }
        >.topNavWrapper{
            display: flex;
            flex-grow: 1;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            color: #424a63;
            font-size: 20px;
            >.logo{
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
    }

    @media(max-width: 500px){
        .topWrapper{
            .detail{
                display: inline-block;
            }
            .topNavWrapper{
                justify-content: center;
                >.topNav{
                    display: none;
                }
                >.logo{
                    >img{
                        transform: translateX(-50%);
                    }
                }
            }
        }
    }
</style>