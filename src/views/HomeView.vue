<template>
  <section>
    <Hero
      :style="{ backgroundImage: `url(${background})` }"
      small-header="- Vaša doživetja spremenimo v večne spomine -"
      big-header="MR Production"
    />
    <Main />
  </section>
</template>
<script>
import Hero from "@/components/SharedComponents/Hero.vue";
import Main from "@/components/Home/Main.vue";
import background from "/public/Hero/hero.jpg";

export default {
  name: "HomeView",
  components: { Hero, Main },
  data() {
    return {
      background,
    };
  },
};
</script>
