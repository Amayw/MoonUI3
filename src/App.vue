<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Moon/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Moon from './components/Moon.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Moon
  }
}
</script>
