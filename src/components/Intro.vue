<template>
  <section id="section-intro">
    <div class="content">
      <h1 id="introTitle">Vincent <span class="highlighted">Landeau</span></h1>
      <h2 id="introTitleStroke" class="text-stroke">Developpeur full-stack</h2>
    </div>
  </section>
</template>

<script>
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default {
  name: "Intro",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: "#section-intro",
        scrub: 1,
        start: "top top",
        end: "+=20%"
      }
    }).to('#introTitle', 2, {left: -100, autoAlpha: 0}, 0)
      .to('#introTitleStroke', 2, {right: -100, autoAlpha: 0}, 0)
  }
}
</script>

<style scoped>
section {
  height: 90vh;
  position: relative;
}

.content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8vw;
}

h2 {
  padding-left: 150px;
}
</style>