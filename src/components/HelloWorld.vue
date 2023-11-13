<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    <button type="button" @click="count++" class="label">Component count is {{ count }}</button>
  </div>

  <p>
    This is an imported component
  </p> 
</template>

<style scoped>
.label {
  color: #ff0000;
}
</style>
