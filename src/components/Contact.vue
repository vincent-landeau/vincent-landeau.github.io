<template>
  <section id="section-contact" class="container">
    <div class="title">
      <h2 id="clientTitle">{{ $t('home.contact.title') }}</h2>
      <h2 id="clientTitleStroke" class="text-stroke">{{ $t('home.contact.subtitle') }}</h2>
    </div>
    <a class="contact-link" href="https://www.malt.fr/profile/vincentlandeau" target="_blank">
      <img src="/dist/Malt_logo_pink.png" alt="logo Malt">
    </a>
  </section>
</template>

<script>
import Cta from '../components/Cta.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: "Contact",
  components: {Cta},
  mounted() {
  }
}
</script>

<style>

.contact-link {
  display: block;
  width: 350px;
  margin: 10vh auto;
  transition: scale .4s;
}
.contact-link:hover {
  scale: 1.1;
}
.contact-link img {
  width: 100%;
}
</style>