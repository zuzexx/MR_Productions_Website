<template>
  <Navigation class="font-[Raleway]" />
  <router-view class="font-[Raleway] h-full bg-zinc-800 mt-24" />
</template>

<script>
import Navigation from "./components/Navbar/Navigation.vue";

export default {
  name: "App",
  components: { Navigation },
};
</script>
