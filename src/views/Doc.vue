<template>
   <div class="docWrapper">
       <TopNav/>
       <div class="content">
           <img @click="showAside=!showAside" src="src/assets/detail.png">
           <aside v-if="showAside">
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

<script>
    import TopNav from '../components/TopNav.vue';
    export default {
        name:'Doc',
        components: {TopNav},
        data(){
            return {
                showAside:false
            }
        }
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
            >img{
                display: none;
            }
            >aside{
                flex: 2;
                display: flex;
                flex-direction: column;
                li{
                    font-size: 20px;
                    margin: 10px 0;
                    &.active{
                        color: $light-color;

                    }
                }

            }
            >main{
                flex: 8;
            }
            @media (max-width:500px){
                aside{
                    display: none;
                }
                img{
                    display: block;
                }

            }
        }
    }


</style>

