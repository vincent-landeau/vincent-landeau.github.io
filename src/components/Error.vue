<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="purple">{{ title }}</h1>
    <h3>
      {{ text }}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  text-align: center;
}
</style>
