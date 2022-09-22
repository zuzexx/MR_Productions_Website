<template>
  <cross
    v-if="showMobileMenu"
    src="/Navbar/cancel-menu-light.png"
    alt="-"
    class="absolute right-8 top-4 cursor-pointer lg:invisible opacity-90"
    data-test="cross-icon-test"
    @click="hideMenu"
  />
  <Menu
    v-else
    class="absolute right-8 top-4 cursor-pointer lg:invisible opacity-90"
    data-test="hamburger-display-test"
    @click="showMenu"
  />

  <ul
    class="mt-24 transition duration-150 ease-in-out mx-auto w-full lg:invisible bg-zinc-900 bg-opacity-80 h-auto absolute right-0"
    :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
  >
    <li
      v-for="navigation in navigations"
      :key="navigation"
      class="py-3 mx-auto hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 bg-opacity-60 bg-zinc-900 hover:bg-opacity-100"
    >
      <router-link :to="navigation.link">
        <div
          class="flex flex-row content-center align-center justify-center cursor-pointer w-full space-x-2 mx-auto"
        >
          <img
            :src="navigation.image"
            alt="-"
            class="w-5 h-5"
            data-test="menu-icons-test"
          />
          <p
            class="font-medium hover:font-semibold text-zinc-300"
            data-test="menu-text-test"
          >
            {{ navigation.text }}
          </p>
        </div></router-link
      >
    </li>
  </ul>
  <!--</nav>-->
</template>
<script>
import Menu from "../svg/Menu.vue";
import Cross from "../svg/Cross.vue";
export default {
  name: "MobileNavigation",
  components: { Menu, Cross },
  data() {
    return {
      navigations: [
        {
          link: "/",
          image: "/Navbar/home.svg",
          text: "Domov",
        },
        {
          link: "/fotografije",
          image: "/Navbar/photography.svg",
          text: "Fotografije",
        },
        {
          link: "/onas",
          image: "/Navbar/about-us.svg",
          text: "O nas",
        },
        {
          link: "/kontakt",
          image: "/Navbar/contact.svg",
          text: "Kontakt",
        },
      ],
      showMobileMenu: false,
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
.filter-zinc {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
}
</style>
