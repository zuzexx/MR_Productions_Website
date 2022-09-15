<template>
  <Navigation class="font-[Raleway]" />
  <router-view class="font-[Raleway]" />
</template>

<script>
import Navigation from "./components/Navbar/Navigation.vue";

export default {
  name: "App",
  components: { Navigation },
};
</script>
