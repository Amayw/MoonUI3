<template>
   <div class="docWrapper">
       <TopNav class="topnav" detailVisible />
       <div class="content">
           <aside v-if="menuVisible">
               <h3>
                   文档
               </h3>
               <ul>
                   <li>
                       <router-link to="/doc/intro">介绍</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/install">安装</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/getstart">开始使用</router-link>
                   </li>
               </ul>
               <h3>
                   组件列表
               </h3>
               <ul>
                   <li>
                      <router-link to="/doc/switch">Switch 开关</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/button">Button 按钮</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/dialog">Dialog 对话框</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/tabs">Tabs 标签页</router-link>
                   </li>
               </ul>
           </aside>
           <main>
               <router-view></router-view>
           </main>
       </div>
   </div>
</template>

<script lang="ts">
    import TopNav from '../components/TopNav.vue';
    import {inject, Ref} from 'vue';
    export default {
        name:'Doc',
        components: {TopNav},
        setup(){
            const menuVisible=inject<Ref<boolean>>('menuVisible');
            return {menuVisible};
        },
    };
</script>

<style lang="scss" scoped>
    $light-color: #fcd75a;
    $dark-color:#424a63;
    .docWrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
        color: $dark-color;
        >.topnav{
            background: rgba(240, 241, 245, 1);
        }
        >.content{
            position: relative;
            display: flex;
            flex-grow: 1;
            overflow: hidden;
            padding-left: 290px;
            @media (max-width: 500px) {
                padding-left: 0;
                border: none;
            }
            >aside{
                display: flex;
                flex-direction: column;
                background: linear-gradient(180deg, rgba(240, 241, 245, 1) 0%, rgba(213,227,248,1) 100%);
                width: 260px;
                padding: 16px 50px;
                position: fixed;
                top: 54px;
                left: 0;
                min-height: 100vh;
                z-index:10;
                li{
                    margin: 20px auto;
                    >.router-link-active{
                        color: $light-color;
                        font-weight: 600;
                    }
                }

            }
            >main{
                overflow: scroll;
                padding: 16px;
            }
        }
    }


</style>

