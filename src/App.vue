<template>
    <router-view></router-view>
</template>

<script lang="ts">
    import {ref,provide} from 'vue';
    import {router} from './router';

    export default {
        name: 'App',
        setup() {
            const width=document.documentElement.clientWidth;
            let menuVisible = ref(width>500);
            provide('menuVisible',menuVisible);
            router.afterEach(()=>{
                if(width<=500){
                    menuVisible.value=false;
                }
            })
            return {menuVisible}
        }
    };
</script>
