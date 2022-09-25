<template>
  <section id="section-intro">
    <div class="content">
      <h1 id="introTitle">Vincent <span class="highlighted">Landeau</span></h1>
      <h2 id="introTitleStroke" class="text-stroke">{{ $t('home.intro.subtitle')}}</h2>
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
        end: "+=30%"
      }
    }).to('#introTitle', 2, {left: -100, autoAlpha: 0}, 0)
      .to('#introTitleStroke', 2, {right: -100, autoAlpha: 0}, 0)
  }
}
</script>

<style scoped>
section {
  margin-top: 5vh;
  height: 45vh;
  position: relative;
  margin-bottom: 40vh;
}

.content {
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  right: 8vw;
}

h2 {
  padding-left: 150px;
}
@media (max-width: 768px) {
  .content {
    right: 0;
    left: 0;
  }
  h1 {
    padding-left: 2vw;
    font-size: 12vw;
    line-height: 18vw;
  }
  h2 {
    font-size: 9vw;
    padding-left: 0;
    padding-right: 2vw;
    text-align: right;
  }
}
</style>