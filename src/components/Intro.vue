<template>
  <section id="section-intro">
    <div class="content">
      <h1 id="introTitle">Vincent <span class="highlighted">Landeau</span></h1>
      <div id="introTitleStroke" class="scrolling-words-container">
        <h2 class="text-stroke">{{ $t('home.intro.subtitle') }}</h2>
        <div class="scrolling-words-box">
          <ul>
            <li><h2 class="text-stroke">freelance</h2></li>
            <li><h2 class="text-stroke">front-end</h2></li>
            <li><h2 class="text-stroke">back-end</h2></li>
            <li><h2 class="text-stroke">mobile</h2></li>
            <li><h2 class="text-stroke">fullstack</h2></li>
            <li><h2 class="text-stroke">freelance</h2></li>
          </ul>
        </div>
      </div>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5vh;
  height: 95vh;
  margin-bottom: 0;
}

.scrolling-words-container {
  display: flex;
  align-items: center;
  font-weight: 600;
}
:lang(en) .scrolling-words-container {
  flex-direction: row-reverse;
}

:lang(fr) .scrolling-words-container > h2 {
  text-transform: capitalize;
}

.scrolling-words-box {
  height: 7rem;
  overflow: hidden;
}
.scrolling-words-box ul {
  padding-right: .5vw;
  padding-left: 0;
  animation: scrollUp 8s infinite;
  animation-delay: 2s;
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
:lang(fr) .scrolling-words-box {
  margin: auto;
  padding-left: 1.5vw;
}
:lang(en) .scrolling-words-container > h2 {
  padding-left: 1.5vw;
}

@media (min-width: 768px) {
  .content {
    padding-right: 5vw;
  }
  .scrolling-words-container {
    padding-left: 150px;
  }
}
@media (max-width: 768px) {
  .content {
    right: 0;
    left: 0;
  }
  .scrolling-words-container, section {
    justify-content: center;
  }
  h1 {
    font-size: 12vw;
    line-height: 18vw;
  }
  h2 {
    font-size: 9vw;
    padding-left: 0;
    text-align: right;
  }
}
</style>