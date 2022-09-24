<template>
  <section>
    <Hero
      :style="{ backgroundImage: `url(${background})` }"
      small-header=" - Pripravljeni na vse -"
      big-header="O nas"
      :button="false"
    />
    <OnasMain />
  </section>
</template>

<script>
import Hero from "@/components/SharedComponents/Hero.vue";
import OnasMain from "../components/Onas/OnasMain.vue";
import background from "/public/Onas/header-onas.jpg";

export default {
  name: "OnasView",
  components: { Hero, OnasMain },
  data() {
    return {
      background,
    };
  },
};
</script>

<style></style>
