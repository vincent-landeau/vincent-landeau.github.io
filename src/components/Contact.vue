<template>
  <section id="section-contact" class="container">
    <div class="title">
      <h2 id="contactTitle">{{ $t('home.contact.title') }}</h2>
      <h2 id="contactTitleStroke" class="text-stroke">{{ $t('home.contact.subtitle') }}</h2>
    </div>
    <a class="contact-link" href="https://www.malt.fr/profile/vincentlandeau" target="_blank">
      <img src="/Malt_logo_pink.png" alt="logo Malt">
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
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: "#section-contact",
        scrub: 1,
        start: "top bottom",
        end: "+=100%"
      }
    }).from('#contactTitle', 2, {left: -150, autoAlpha: 0}, 0)
      .from('#contactTitleStroke', 2, {right: -150, autoAlpha: 0}, 0)
  }
}
</script>

<style>

.contact-link {
  display: block;
  width: 50vw;
  max-width: 250px;
  margin: 10vh auto;
  transition: scale .4s;
}
@media (hover) {
  .contact-link:hover {
    scale: 1.1;
  } 
}
.contact-link img {
  width: 100%;
}
</style>