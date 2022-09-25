<template>
  <a class="work-item cursor-hover" v-on:click="goToWork($event, slug);">
    <div id="workItemText" class="work-title">
      <h3>{{ title }}</h3>
      <h3 class="text-stroke">{{ subtitle }}</h3>
    </div>
    <div id="workItemImage" class="image">
      <div class="content">
        <img :src=image.src :alt=image.alt>
      </div>
    </div>
  </a>
</template>

<script>
import {gsap} from "gsap";
import {routerPush} from "@/router";

export default {
  name: "WorkItem",
  props: ["slug", "title", "subtitle", "image", "tl"],
  setup() {
    return {routerPush}
  },
  methods: {
    goToWork(event, slug) {
      this.$emit('kill-animations')
      const workItemImage = event.target.querySelector("#workItemImage")
      const offsetImage = workItemImage.getBoundingClientRect()
      const offsetBody = document.body.getBoundingClientRect()
      const top = Math.ceil(offsetImage.top - parseInt(workItemImage.style.top))
      const right = Math.ceil(offsetImage.right - offsetBody.right)

      const content = workItemImage.querySelector('.content')


      content.style.aspectRatio = "auto"
      content.style.height = "100%"
      content.classList.add('active')
      workItemImage.style.zIndex = "999"
      gsap.to(workItemImage, {
        top: -top,
        duration: .6,
        right: right,
        width: '100vw',
        height: '50vh',
        onComplete: () => {
          routerPush('work-item', undefined, {slug: slug})
        }
      })
    }
  }
}
</script>

<style scoped>
.work-item {
  display: block;
  position: relative;
  aspect-ratio: 1;
}

.work-title {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -9;
  top: 0;
  left: 0
}

.work-title .text-stroke {
  margin-left: 4vw;
}

.image {
  position: absolute;
  bottom: 0%;
  right: 0;
  z-index: -99;
  width: 80%;
}

.content {
  position: relative;
  aspect-ratio: 1;
}

.content img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content:after {
  content: "";
  display: block;
  height: 100%;
  background: linear-gradient(0deg, rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.6));
}

.content.active:after {
  background: linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), linear-gradient(0deg, rgba(150, 120, 182, 0.3), rgba(150, 120, 182, 0.3));
}

@media (max-width: 768px) {
  h3 {
    font-size: 8vw;
    line-height: 8vw;
  }
  .text-stroke {
    margin-left: 8vw!important;
  }
}

</style>