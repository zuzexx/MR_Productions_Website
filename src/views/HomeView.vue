<template>
  <section>
    <Hero />
    <Main />
  </section>
</template>

<script>
import Hero from "@/components/Home/Hero.vue";
import Main from "@/components/Home/Main.vue";
export default {
  name: "HomeView",
  components: { Hero, Main },
};
</script>
