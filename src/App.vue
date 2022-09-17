<template>
  <Navigation class="font-[Raleway]" />
  <router-view class="font-[Raleway] h-full bg-zinc-800 mt-24" />
  <Footer class="bg-zinc-800 font-[Raleway]" />
</template>

<script>
import Navigation from "./components/Navbar/Navigation.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: { Navigation, Footer },
};
</script>
