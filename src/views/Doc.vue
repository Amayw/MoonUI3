<template>
   <div class="docWrapper">
       <TopNav/>
       <div class="content">
           <aside v-if="menuVisible">
               <h2>
                   组件列表
               </h2>
               <ul>
                   <li class="active">
                      <router-link to="/doc/switch">switch</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/button">button</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/dialog">dialog</router-link>
                   </li>
                   <li>
                       <router-link to="/doc/tabs">tabs</router-link>
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
    @import "src/index.scss";
    .docWrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
        color: $dark-color;
        >.content{
            display: flex;
            flex-grow: 1;
            overflow: auto;
            padding: 5px;
            >aside{
                flex: 2;
                display: flex;
                flex-direction: column;
                li{
                    font-size: 20px;
                    margin: 10px 0;
                    &.active{
                        color: $light-color;
                        font-weight: 600;
                    }
                }

            }
            >main{
                flex: 8;
            }
        }
    }


</style>

