<template>
  <section>
    <Hero
      :style="{ backgroundImage: 'url(/Onas/header-onas.jpg)' }"
      small-header=" - Pripravljeni na vse -"
      big-header="O nas"
      :button="false"
      data-test="hero-component-test"
    />
    <OnasMain data-test="main-component-test" />
  </section>
</template>

<script>
import Hero from "@/components/SharedComponents/Hero.vue";
import OnasMain from "../components/Onas/OnasMain.vue";

export default {
  name: "OnasView",
  components: { Hero, OnasMain },
};
</script>

<style></style>
