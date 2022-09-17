<template>
  <nav
    :class="[
      'w-full',
      'flex',
      'flex-row',
      'justify-center',
      'align-center',
      'fixed',
      'top-0',
      'left-0',
      navHeightClass,
      'bg-zinc-900',
      'z-50',
    ]"
  >
    <router-link to="/"
      ><img
        src="/logo.png"
        alt="company logo"
        class="h-16 absolute left-8 mt-6 cursor-pointer"
        data-test="logo-display-test"
    /></router-link>
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
  computed: {
    navHeightClass() {
      return {
        "h-24": !this.showMobileMenu,
        "h-72": this.showMobileMenu,
      };
    },
  },
};
</script>
