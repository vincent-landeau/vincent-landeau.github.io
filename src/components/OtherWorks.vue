<template>
  <section>
    <a v-for="otherWork in otherWorks" v-on:click="routerPush('work-item', undefined, {slug: otherWork[0]})" class="other-work">
      <div class="text">
        <h3>{{ otherWork[1].title }}</h3>
        <h3 class="text-stroke">{{ otherWork[1].subtitle }}</h3>
      </div>
      <div class="image">
        <img :src="otherWork[1].image.src" :alt="otherWork[1].image.alt">
      </div>
    </a>
  </section>
</template>

<script>
import WorkItem from '../components/WorkItem.vue'
import {routerPush} from "@/router";
import {works} from "@/assets/data";

export default {
  name: "OtherWorks",
  components: {WorkItem},
  props: ['slug'],
  data () {
    return {
      otherWorks: [],
      componentKey: 0,
    }
  },
  setup(){
    return { routerPush }
  },
  mounted() {
    const workObjects = Object.entries(works)
    workObjects.forEach((workObject, key) => {
      if (workObject[0] === this.slug) {
        let prev = key-1
        if (prev < 0) prev = workObjects.length - 1
        let next = key + 1
        if (next > workObjects.length - 1) next = 0

        this.otherWorks = [ workObjects[prev], workObjects[next] ]
      }
    })
  },
  updated() {
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  aspect-ratio: 4/1;
}

.other-work {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
@media (hover) and (min-width: 576px){
  .other-work:hover {
    width: 150%;
  }
}
@media (hover) and (max-width: 576px){
  .other-work:hover {
    height: 130%;
    width: 100%;
  }
  section:hover .other-work:not(:hover) {
    height: 70%;
  }
}

 .text-stroke {
  margin-left: 4vw;
}


.image {
  position: absolute;
  z-index: -9;
  width: 100%;
  height: 100%;
}

.image:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.8);
}

.image img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width : 992px) {
  section {
    aspect-ratio: 3/1;
  }
  h3.text-stroke {
    color: #d9d9d9;
  }
}

@media (max-width : 768px) {
  section {
    aspect-ratio: 2/1;
  }
  h3 {
    font-size: 5.2vw;
    line-height: 5.2vw;
  }
}

@media (max-width: 576px) {
  section {
    aspect-ratio: 4/2;
    flex-direction: column;
  }

  h3 {
    font-size: 10vw;
    line-height: 10vw;
  }
}
</style>