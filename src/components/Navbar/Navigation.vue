<template>
  <nav class="w-full h-auto">
    <DesktopNavigation />
    <MobileNavigation />
  </nav>
</template>
<script>
import MobileNavigation from "@/components/Navbar/MobileNavigation.vue";
import DesktopNavigation from "./DesktopNavigation.vue";
export default {
  name: "Navigation",
  components: { MobileNavigation, DesktopNavigation },
};
</script>
