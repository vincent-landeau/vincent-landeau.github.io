<script setup>
import Error from './components/Error.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo-transparent.png" width="125" height="125" />


    <div class="wrapper">
      <Error title="Site en cours de développement" text="C'est bientôt prêt !"/>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  place-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
