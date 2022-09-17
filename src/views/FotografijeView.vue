<template>
  <section class="bg-zinc-800 h-full"><HeaderFotografije /> <Grid /></section>
</template>

<script>
import Grid from "@/components/SharedComponents/Grid.vue";
import HeaderFotografije from "../components/Fotografije/HeaderFotografije.vue";

export default {
  name: "FotografijeView",
  components: { Grid, HeaderFotografije },
};
</script>

<style></style>
