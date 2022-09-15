<template>
  <nav class="h-auto w-full flex flex-row justify-center align-center">
    <router-link to="/"
      ><img
        src="/logo.png"
        alt="company logo"
        class="h-16 absolute left-8 top-18 mt-3 cursor-pointer"
    /></router-link>
    <img
      v-if="showMobileMenu"
      src="/Navbar/cancel-menu-light.png"
      alt="-"
      class="h-10 absolute right-8 top-8 cursor-pointer lg:invisible"
      @click="hideMenu"
    />
    <img
      v-else
      src="/Navbar/open-menu-light.png"
      alt="-"
      class="h-10 absolute right-8 top-8 cursor-pointer lg:invisible"
      @click="showMenu"
    />

    <ul
      class="mt-24 space-y-2 transition duration-150 ease-in-out mx-auto w-4/6 lg:invisible"
      :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
    >
      <li
        v-for="navigation in navigations"
        :key="navigation"
        class="py-2 mx-auto hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
      >
        <router-link :to="navigation.link">
          <div
            class="flex flex-row content-center align-center justify-center cursor-pointer w-full space-x-2 mx-auto"
          >
            <img :src="navigation.image" alt="-" class="w-5 h-5" />
            <p class="font-medium hover:font-semibold">{{ navigation.text }}</p>
          </div></router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "MobileNavigation",
  data() {
    return {
      navigations: [
        {
          link: "/",
          image: "/Navbar/home-light.png",
          text: "Domov",
        },
        {
          link: "/fotografije",
          image: "/Navbar/photography-light.png",
          text: "Fotografije",
        },
        {
          link: "/onas",
          image: "/Navbar/about-us-light.png",
          text: "O nas",
        },
        {
          link: "/kontakt",
          image: "/Navbar/contact-us-light.png",
          text: "Kontakt",
        },
      ],
      showMobileMenu: true,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = true;
    },
    hideMenu() {
      this.showMobileMenu = false;
    },
  },
};
</script>

<style scoped>
.open-menu {
  @apply opacity-100;
}
.closed-menu {
  @apply opacity-0 h-0 p-0;
}
</style>
