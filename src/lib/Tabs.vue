<template>
    <div class="moon-tabs">
        <ul v-for="item in ['tab1','tab2']" key>
            <li :class="">{{item}}</li>
        </ul>
        <div class="moon-content" :class="'active-content'">内容1</div>
        <div class="moon-content">内容2</div>
    </div>
</template>

<script>
    export default {
        name:'MoonTabs'
    };
</script>

<style lang="scss">
    @import "src/index.scss";
    .moon-tabs{
        >ul{
            display: flex;
            >li{
                &.active-li{
                    color:$light-color;
                }
            }

        }
        >.moon-content{
            display:none;
            &.active-content{
                display: flex;
            }
        }
    }
</style>