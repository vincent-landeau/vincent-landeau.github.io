<template>
  <div class="greetings">
    <h1 class="purple">{{ $t('not-found.title') }}</h1>
    <h3><a v-on:click="routerPush('home', 'intro')">{{ $t('not-found.go-back') }}</a></h3>
  </div>
</template>

<script>
import {routerPush} from "@/router";

export default {
  setup(){
    return { routerPush }
  },
}
</script>

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
