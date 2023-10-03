<template>
  <a class="client-item cursor-hover">
    <div id="clientItemText" class="client-title">
      <h4>{{ title }}</h4>
      <h4>{{ subtitle }}</h4>
    </div>
    <img :src="`/clients/${slug}.png`" :alt="`${title} ${subtitle}  logo`">
  </a>
</template>

<script>
import {gsap} from "gsap";

export default {
  name: "ClientItem",
  props: ["slug", "title", "subtitle", "url"],
  mounted() {
    this.$el.addEventListener("click", () => {
      window.open(this.url);
    });
  },
}
</script>

<style scoped>
.client-item {
  display: block;
  position: relative;
  aspect-ratio: 1;
  min-height: 200px;
  width: 100%;
  padding: 15%;
}
.client-title {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity .4s;
  z-index: 999;
}
.client-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity .4s;
}

@media (hover) {
  .client-item:hover .client-title {
    opacity: 1;
  }
  .client-item:hover img {
  opacity: .3;
}
}

@media (max-width: 768px) {
  h3 {
    font-size: 8vw;
    line-height: 8vw;
  }
  .text-stroke {
    margin-left: 8vw!important;
  }
}

</style>