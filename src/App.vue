<template>
  <AppNavigation/>
  <RouterView/>
  <AppFooter/>
  <div class="custom-cursor">
    <div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div>
    <div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
  </div>
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppNavigation from './components/AppNavigation.vue'

</script>
<script lang="ts">
import gsap from "gsap";

export default {
  mounted() {
    const cursorBig = document.getElementById('cursor-big'),
        cursorSmall = document.getElementById('cursor-small');

    const tl = gsap
        .to(cursorBig, 0.2, {
          scale: 1.6
        }).reversed(true)

    // Event Listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHover);
    document.querySelectorAll("a").forEach((element) => {
      element.addEventListener("mouseover", onMouseHover);
      element.addEventListener("mouseout", onMouseHover);
    })

    function onMouseMove(e) {
      gsap.to(cursorBig, 0.4, {
        x: e.clientX - 30,
        y: e.clientY - 30
      });
      gsap.to(cursorSmall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4
      });
    }

    function onMouseHover() {
      tl.reversed(!tl.reversed());
    }
  }
}
</script>

<style>
.custom-cursor__ball {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 99999;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.custom-cursor__ball--big {
  content: "";
  width: 60px;
  height: 60px;
  border: .5px solid #78fff1;
  border-radius: 50%;
}

.custom-cursor__ball--small {
  content: "";
  width: 6px;
  height: 6px;
  background: #78fff1;
  border-radius: 50%;
}
</style>
