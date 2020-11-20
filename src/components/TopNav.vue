<template>
       <div class="topNavWrapper">
           <div v-if="detailVisible" class="detail" @click="changeVisible">
               <m-icon class="icon-img" icon="more"></m-icon>
           </div>
           <router-link to="/" class="logo">
               <img src="/logo.jpg"/>
           </router-link>
           <div class="topNav">
               <router-link to="/doc">文档</router-link>
               <router-link to="/doc/switch">组件</router-link>
               <a href="https://github.com">Github</a>
               <a href="https://github.com">码云</a>
           </div>
       </div>
</template>

<script lang="ts">
    import Icon from '../components/Icon.vue'
    import {inject,Ref} from 'vue';
    export default {
        name:'TopNav',
        props:{
          detailVisible:{
              type:Boolean,
              default:false
          }
        },
        components:{
          'm-icon':Icon
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
            .icon-img{
                width: 30px;
                height:30px;
            }
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        color: #424a63;
        font-size: 20px;
        >.logo{
            margin-left: 40px;
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
                    margin-right:30px;
                }

            }
            &:last-child{
                margin-right:50px;
            }

        }

    }

    @media(max-width: 500px){
        .topNavWrapper{
            position: relative;
            >.detail{
                display: inline-block;
                position: absolute;
                left: 10px;
                top: 10px;
            }
            >.logo{
                margin-left: 50%;
                transform: translateX(-50%);
            }
            >.topNav{
                display: none;
            }
        }
    }
</style>