<template>
    <div class="topNavWrapper">
        <div class="logo">
            <img src="src/assets/logo.jpg"/>
            <span>MoonUI.js</span>
        </div>
        <div class="topNav">
            <router-link to="/">Home</router-link>
            <router-link to="/doc">Document</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TopNav'
    };
</script>

<style lang="scss" scoped>
    .topNavWrapper{
        border: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        >.logo{
            display: flex;
            align-items: center;
            >img{
                width: 40px;
                height:40px;
            }
        }
        >.topNav{
            >a{
                &:not(last-child){
                    margin-right:5px;
                }
            }

        }
    }
</style>