<template>
    <div class="moon-tabs">
        <slot/>
    </div>
</template>

<script>
    export default {
        name:'MoonTabs',
        data(){
            return {
                selectedId:0
            }
        }
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