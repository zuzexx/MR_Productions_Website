<template>
  <section>
    <Hero
      :style="{ backgroundImage: `url(${background})` }"
      small-header="- Videi, ki so vam v ponos -"
      big-header=" MR Production kolekcija"
      :button="false"
    />
    <Grid />
  </section>
</template>

<script>
import Grid from "@/components/SharedComponents/Grid.vue";
import Hero from "@/components/SharedComponents/Hero.vue";
import background from "/public/Fotografije/header-fotografije.jpg";

export default {
  name: "FotografijeView",
  components: { Grid, Hero },
  data() {
    return {
      background,
    };
  },
};
</script>

<style></style>
