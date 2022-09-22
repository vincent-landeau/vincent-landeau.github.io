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
        <p>
          <span class="info-title">Réalisé en</span>
          {{ work.date }}
          <br>
          <span class="info-title">Rôle</span>
          <div v-for="role in work.roles">{{ role }}</div>
        </p>
      </div>
      <div class="description">{{ work.description }}</div>
      <div class="problemes">
        <h4>Problèmes</h4>
        <p>{{ work.problems }}</p>
      </div>
      <div class="solutions">
        <h4>Solutions</h4>
        <p>{{ work.solutions }}</p>
      </div>
      <Cta :href=work.url textstroke="Visiter" highlighted="le Site"></Cta>
    </div>
    <div v-for="(item, index) in work.content" class="content">
      <div v-if="item.title || item.text">
        <h4>{{ item.title }}</h4>
        <p>{{ item.text }}</p>
      </div>
      <img v-if="item.type == 'image'" :src=item.src alt="">
      <video v-else-if="item.type == 'local-video'" :src=item.src alt=""></video>
      <iframe v-else-if="item.type == 'video'" :src=item.src frameborder="0"></iframe>
    </div>
  </section>
  <OtherWorks :key="componentKey" :slug=$route.params.slug></OtherWorks>
</template>
<script setup>
import { ref } from 'vue';
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};
</script>
<script>
import Cta from '../components/Cta.vue'
import OtherWorks from '../components/OtherWorks.vue'
import {gsap} from "gsap";
import { useRoute } from 'vue-router'
import {works} from "@/assets/data";

export default {
  components: {Cta, OtherWorks},
  data() {
    return {
      work: []
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
  methods :{
    prepare() {
      const route = useRoute()
      this.work = works[route.params.slug]
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
  margin: 0 3vw 0 auto !important;
}

h1 {
  font-size: 7vw;
  line-height: 7vw;
}

h1.text-stroke {
  margin-left: 15vw;
}

h1.text-stroke:after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(25%, -50%);
  left: -15vw;
  width: 10vw;
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
    "info . . description description description"
    ". problemes problemes . solutions solutions"
    ". cta cta . . .";
}

.info {
  grid-area: info;
}

.info-title {
  display: block;
  margin-top: 18px;
  font-weight: bold;
  font-size: 18px;
}

.description {
  grid-area: description;
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


</style>