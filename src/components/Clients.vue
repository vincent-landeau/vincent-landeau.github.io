<template>
    <section id="section-clients" class="container">
      <div class="title">
        <h2 id="clientTitle">{{ $t('home.clients.title') }}</h2>
        <h2 id="clientTitleStroke" class="text-stroke">{{ $t('home.clients.subtitle') }}</h2>
      </div>
      <div id="clientItems" class="content">
        <Carousel :items-to-show="3" :wrap-around="true">
          <Slide v-for="(client,slug) in clients" :key="slug">
            <ClientItem
                :slug=slug
                :title=client.title
                :subtitle=client.subtitle
                :url=client.url></ClientItem>
          </Slide>
        </Carousel>
      </div>
    </section>
  </template>

<script>
import ClientItem from '../components/ClientItem.vue'
import { Carousel, Slide } from 'vue3-carousel'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {clients} from "@/assets/data";
import 'vue3-carousel/dist/carousel.css'


export default {
  name: "Clients",
  components: {
    ClientItem,
    Carousel,
    Slide
  },
  setup () {
    return { clients }
  }

}
</script>

<style scoped>
.carousel {
  margin-top: 10vh;
}

@media (min-width: 768px) {
  .client-item:nth-of-type(even) {
    position: relative;
    top: 150px;
  }
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
    padding-top: 50px;
  }
}
</style>