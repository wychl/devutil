<template>
  <h1>{{ msg }} {{count}}</h1>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  msg: String
})
const count = ref(1)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
