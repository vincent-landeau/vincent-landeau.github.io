<template>
  <section id="section-intro">
    <div class="content">
      <h1 id="introTitle">Vincent <span class="highlighted">Landeau</span></h1>
      <h2 class="text-stroke scrolling-words-container">
        <span>{{ $t('home.intro.subtitle') }}</span>
        <div class="scrolling-words-box">
          <ul>
            <li>freelance</li>
            <li>front-end</li>
            <li>back-end</li>
            <li>mobile</li>
            <li>fullstack</li>
            <li>freelance</li>
          </ul>
        </div>
      </h2>
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

.scrolling-words-container {
  display: flex;
  align-items: center;
  font-weight: 600;
}
:lang(en) .scrolling-words-container {
  flex-direction: row-reverse;
}

:lang(fr) .scrolling-words-container {
  text-transform: capitalize;
}

.scrolling-words-box {
  height: 7rem;
  overflow: hidden;
}
.scrolling-words-box ul {
  margin: 0 0.625rem;
  padding: 0;
  animation: scrollUp 8s infinite;
}
.scrolling-words-box ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 7rem;
  list-style: none;
}
:lang(en) .scrolling-words-box ul li {
  justify-content: flex-end;
  text-transform: capitalize;
}

@keyframes scrollUp {
  16.6666666667%, 33.3333333333% {
    transform: translateY(-16.6666666667%);
  }
  33.3333333333%, 50% {
    transform: translateY(-33.3333333333%);
  }
  50%, 66.6666666667% {
    transform: translateY(-50%);
  }
  66.6666666667%, 83.3333333333% {
    transform: translateY(-66.6666666667%);
  }
  83.3333333333%, 100% {
    transform: translateY(-83.3333333333%);
  }
}

@media (min-width: 768px) {
.scrolling-words-box {
  margin: auto;
  padding: 0 1rem;
}
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