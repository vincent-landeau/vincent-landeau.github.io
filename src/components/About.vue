<template>
  <section id="section-about" class="container">
    <div class="title">
      <h2 id="aboutTitle">À propos</h2>
      <h2 id="aboutTitleStroke" class="text-stroke">de moi</h2>
    </div>
    <div class="content">
      <p id="aboutText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem ante, dignissim in urna at, molestie
        porttitor mi. Proin tempor, lectus quis laoreet feugiat, odio justo imperdiet urna, sit amet luctus arcu magna
        nec nibh. Proin accumsan augue eu massa luctus, sed varius orci consectetur. Nulla viverra dolor a diam posuere,
        at egestas lacus sollicitudin. Aenean vel vehicula nisl, vitae rhoncus nisi. Aenean dictum dui condimentum
        tellus pulvinar sagittis non a erat. Fusce aliquet sem quis odio cursus, id lacinia ipsum lacinia.<br>
        <br>
        Vestibulum ac eros interdum, laoreet urna ultrices, tristique nibh. Nam ut risus sit amet tortor fringilla
        eleifend at nec ipsum. Sed fringilla ante at ante venenatis malesuada. Sed facilisis magna ante, sit amet
        molestie orci eleifend eget. Cras non convallis ex. Aenean augue mauris, malesuada vel condimentum non, dapibus
        non urna. Fusce euismod gravida tristique. Sed sed dolor vitae lacus aliquet ullamcorper et quis lectus.</p>
      <div id="aboutImage" class="image"></div>
      <Cta href="#" textstroke="Télécharger" highlighted="mon CV"></Cta>
    </div>
  </section>
</template>

<script>
import Cta from '../components/Cta.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: "About",
  components: {Cta},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({scrollTrigger:{
        trigger:"#section-about",
        scrub: 1,
        start:"top bottom",
        end:"+=100%"
      }
    }).from('#aboutText', 2, { top: -150, autoAlpha: 0 }, 0)
      .from('#aboutTitle', 2, { left: -150, autoAlpha: 0 }, 0)
      .from('#aboutTitleStroke', 2, { right: -150, autoAlpha: 0 }, 0)
      .from('#aboutImage', 2, { top: document.querySelector('#aboutImage').offsetHeight, autoAlpha: 0 }, 0)
  }
}
</script>

<style scoped>
#section-about {
  position: relative;
}
.content > * {
  max-width: 600px;
  width: 35vw;
}

.content p {
  padding-top: 100px;
  text-align: justify;
}

.content .image {
  position: absolute;
  top: -3vw;
  right: 0;
  z-index: -999;
  max-width: 550px;
  max-height: 550px;
  width: 35vw;
  height: 35vw;
  background:
      linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)),
      linear-gradient(0deg, rgba(150, 120, 182, 0.3), rgba(150, 120, 182, 0.3)),
      url('./pp.jpg');
  background-size: cover;
}
</style>