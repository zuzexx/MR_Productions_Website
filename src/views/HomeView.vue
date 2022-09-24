<template>
  <section>
    <Hero
      :style="{ backgroundImage: 'url(/Hero/hero.jpg)' }"
      small-header="- Vaša doživetja spremenimo v večne spomine -"
      big-header="MR Production"
      data-test="hero-component-test"
    />
    <Main data-test="main-component-test" />
  </section>
</template>
<script>
import Hero from "@/components/SharedComponents/Hero.vue";
import Main from "@/components/Home/Main.vue";

export default {
  name: "HomeView",
  components: { Hero, Main },
};
</script>
