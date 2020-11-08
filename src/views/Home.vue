<template>
    <TopNav/>
    <div class="content">
        <h3>一个简单易上手的UI框架</h3>
        <div class="link">
            <a class="git">Github</a>
            <a class="get">Get Started</a>
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
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        >h3{
            margin: 20px 0;
        }
        >.link{
            display: flex;
            align-items: center;
            >a{
                margin: 5px;
                padding: 8px;
                border-radius: 16px;
                &.git{
                    background: #7480a3;
                    color: white;
                }
                &.get{
                    border:1px solid #7480a3;
                    color: #7480a3;
                }
            }
        }
    }
</style>

