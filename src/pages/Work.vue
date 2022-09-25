<template>
  <div class="banner">
    <img id="logo" class="logo" src="/logo-rockendelire-blanc.png" alt="">
    <img class="bg" src="/rockendelire-1.jpg" alt="">
  </div>
  <section class="container">
    <div class="title">
      <h1 id="introTitle">{{ work.title }}</h1>
      <h1 id="introTitleStroke" class="text-stroke">{{ work.subtitle }}</h1>
    </div>
    <div class="presentation">
      <div class="info">
        <div class="year">
          <p class="info-title">{{ $t(`work-item.year`) }}</p>
          <p>{{ work.date }}</p>
        </div>
        <div class="roles">
          <p class="info-title">{{ $tc(`work-item.roles`, rolesLength) }}</p>
          <div v-for="role in work.roles">{{ role }}</div>
        </div>
      </div>
      <div class="description">{{ $t(`work-item.${$route.params.slug}.description`) }}</div>
      <div class="problemes">
        <h4>{{ $t(`work-item.problems`) }}</h4>
        <p>{{ $t(`work-item.${$route.params.slug}.problems`) }}</p>
      </div>
      <div class="solutions">
        <h4>{{ $t(`work-item.solutions`) }}</h4>
        <p>{{ $t(`work-item.${$route.params.slug}.solutions`) }}</p>
      </div>
      <Cta :href=work.url :textstroke="$t(`work-item.visit-website-stroke`)" :highlighted="$t(`work-item.visit-website-highlighted`)"></Cta>
    </div>
    <div v-for="(item, index) in work.content" class="content">
      <div v-if="item.text">
        <h4>{{ $t(`work-item.${$route.params.slug}.content.${index}.title`) }}</h4>
        <p>{{ $t(`work-item.${$route.params.slug}.content.${index}.text`) }}</p>
      </div>
      <img v-if="item.type == 'image'" :src=item.src alt="">
      <video v-else-if="item.type == 'local-video'" :src=item.src alt=""></video>
      <iframe v-else-if="item.type == 'video'" :src=item.src frameborder="0"></iframe>
    </div>
  </section>
  <OtherWorks :key="componentKey" :slug=$route.params.slug></OtherWorks>
</template>
<script setup>
import {ref} from 'vue';

const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};
</script>
<script>
import Cta from '../components/Cta.vue'
import OtherWorks from '../components/OtherWorks.vue'
import {gsap} from "gsap";
import {useRoute} from 'vue-router'
import {works} from "@/assets/data";

export default {
  components: {Cta, OtherWorks},
  data() {
    return {
      work: [],
      rolesLength: null
    }
  },
  mounted() {
    this.prepare()
    gsap.from('#introTitle', {left: -100, duration: 1, ease: "power3.in", autoAlpha: 0})
    gsap.from('#introTitleStroke', {right: -100, duration: 1, ease: "power3.in", autoAlpha: 0})
    gsap.from('.info', {top: 100, duration: 1.5, autoAlpha: 0})
    gsap.from('.description', {top: 200, duration: 1, autoAlpha: 0})
    gsap.from('.problemes', {top: 200, duration: 1, autoAlpha: 0})
    gsap.from('.solutions', {top: 100, duration: 2, autoAlpha: 0})
  },
  updated() {
    this.prepare()
    this.forceRerender()
  },
  methods: {
    prepare() {
      const route = useRoute()
      this.work = works[route.params.slug]
      this.rolesLength = this.work.roles.length
    }
  }
}
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50vh;
}

.logo {
  height: 50%;
}

.bg {
  position: absolute;
  z-index: -99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner:after {
  content: "";
  position: absolute;
  z-index: -9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)),
  linear-gradient(0deg, rgba(150, 120, 182, 0.3), rgba(150, 120, 182, 0.3));
}

.container {
  margin-top: -3vw;
}

.title {
  position: relative;
}

h1 {
  text-align: left;
  font-size: 7vw;
  line-height: 7vw;
}

h1:not(.text-stroke) {
  margin-left: 30% !important;
}

h1.text-stroke {
  margin-left: 50%;
}

h1.text-stroke:after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: -16%;
  width: 18%;
  height: 1px;
  background-color: #d9d9d9;
}

.presentation {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 50px 0px;
  grid-template-areas:
    "info info . description description description"
    ". problemes problemes . solutions solutions"
    ". cta cta cta cta cta";
}

.info {
  grid-area: info;
  display: flex;
  flex-wrap: wrap;
  place-content: start;
}

.roles,
.year {
  margin-top: 18px;
  width: 100%;
}

.info-title {
  font-weight: bold;
  font-size: 18px;
}

.description {
  text-align: justify;
}

.description {
  grid-area: description;
  text-align: justify;
}

.problemes {
  grid-area: problemes;
}

.solutions {
  grid-area: solutions;
}

.cta {
  grid-area: cta;
}

.content {
  display: flex;
  gap: 10%;
  align-items: center;
  margin-top: 150px;
}

.content > div,
.content > div + img,
.content > div + video,
.content > div + iframe {
  max-width: 50%;
}

.content h4 {
  font-family: "Lust Slim Display";
  font-size: 48px;
  line-height: 48px;
}

.content img {
  display: block;
  max-width: 100%;
}

.content iframe {
  aspect-ratio: 16 / 9;
  width: 100%; /* change this to a fixed width, or create a container with a width. */
  height: 100%;
  margin: 100px 0 100px 0;
}

@media (max-width : 992px) {
  .container {
    margin-top: -4vw;
  }
  h1 {
    font-size: 10vw;
    line-height: 10vw;
  }
  .presentation {
    grid-template-areas:
    "info info description description description description"
    ". problemes problemes . solutions solutions"
    ". cta cta cta cta cta";
  }
}
@media (max-width : 768px) {
  .container {
    margin-top: -4vw;
  }
  h1 {
    font-size: 12vw;
    line-height: 12vw;
  }

  h1:not(.text-stroke) {
    margin-left: 0 !important;
  }

  h1.text-stroke {
    margin-left: 30%;
  }

  .presentation {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
    "info . ."
    "info description description"
    "problemes problemes ."
    "solutions solutions ."
    ". cta cta";
  }

  .content {
    flex-wrap: wrap;
    justify-content: center;
  }
  .content > div {
    max-width: 100%;
    width: 100%;
    padding-bottom: 50px;
  }
}

@media (max-width: 576px) {
  .presentation {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
    "info info info"
    "description description description"
    "problemes problemes ."
    ". solutions solutions"
    "cta cta cta";
  }

  .info {
    flex-direction: row-reverse;
  }
  .year {
    text-align: right;
  }
  .roles,
  .year {
    margin-top: 0;
    width: 50%;
  }
}

</style>