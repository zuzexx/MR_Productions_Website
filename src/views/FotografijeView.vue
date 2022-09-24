<template>
  <section>
    <Hero
      :style="{ backgroundImage: 'url(/Fotografije/header-fotografije.jpg)' }"
      small-header="- Videi, ki so vam v ponos -"
      big-header=" MR Production kolekcija"
      :button="false"
      data-test="hero-component-test"
    />
    <Grid data-test="grid-component-test" />
  </section>
</template>

<script>
import Grid from "@/components/SharedComponents/Grid.vue";
import Hero from "@/components/SharedComponents/Hero.vue";

export default {
  name: "FotografijeView",
  components: { Grid, Hero },
};
</script>

<style></style>
