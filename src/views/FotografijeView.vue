<template>
  <section>
    <Hero
      :style="{ backgroundImage: `url(${background})` }"
      small-header="- Fresh works from around the world -"
      big-header=" The avada collection"
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
