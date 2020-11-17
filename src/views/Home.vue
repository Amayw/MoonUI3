<template>
    <div class="topNavAndContent">
        <TopNav/>
        <div class="content">
            <div class="introduction">
                <h3>MoonUI</h3>
                <h3>一个简单易上手的UI框架</h3>
            </div>
            <div class="link">
                <a class="git" href="https://github.com">Github</a>
                <router-link class="get" to="/doc">Get Started</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import TopNav from '../components/TopNav.vue';
    export default {
        name:'Home',
        components: {TopNav}
    };
</script>

<style lang="scss" scoped>
    $light-color: #fcd75a;
    $dark-color:#424a63;
    .topNavAndContent{
        background: #f0f1f5;
        clip-path: ellipse(80% 60% at 50% 40%);
        >.content{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 80px;
            >.introduction{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 20px 0;
                color: $dark-color;
            }
            >.link{
                display: flex;
                align-items: center;
                >a{
                    margin: 5px;
                    padding: 8px;
                    border-radius: 16px;
                    &.git{
                        background: $light-color;
                        color: white;
                    }
                    &.get{
                        border:1px solid $light-color;
                        color: $light-color;
                    }
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }


</style>

