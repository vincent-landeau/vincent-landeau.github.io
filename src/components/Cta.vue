<template>
  <div class="cta">
    <a :href=href target="_blank"><span class="text-stroke">{{ textstroke }}</span><span class="highlighted">{{ highlighted }}</span></a>
  </div>
</template>

<script>
export default {
  name: "CTA",
  props: ["href", "textstroke", "highlighted"],
}
</script>

<style scoped>
.cta {
  position: relative;
  display: flex;
}
.cta a {
  font-family: "Lust Slim Display";
  font-size: 48px;
  line-height: 48px;
  margin-top: 50px;
  margin-left: 4vw;
  width: 100%;
  display: block;
  max-width: 280px;
}
.cta .text-stroke {
  display: block;
}
.cta a .highlighted{
  margin-left: 40%;
}

@media (max-width: 576px) {
  .cta a {
    font-size: 10vw;
    line-height: 10vw;
  }

}
</style>