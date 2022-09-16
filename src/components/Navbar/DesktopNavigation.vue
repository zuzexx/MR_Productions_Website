<template>
  <nav
    class="w-full h-0 invisible flex flex-row lg:fixed lg:top-0 lg:left-0 lg:visible lg:h-22"
  >
    <router-link to="/"
      ><img
        src="/logo.png"
        alt="company logo"
        class="h-16 absolute left-8 top-18 mt-8 cursor-pointer"
        data-test="logo-display-test"
    /></router-link>
  </nav>
  <ul
    class="lg:visible invisible lg:flex lg:flex-row lg:flex-nowrap lg:w-2/4 lg:right-8 lg:absolute lg:top-8 h-0"
  >
    <li
      v-for="navigation in navigations"
      :key="navigation"
      class="py-6 px-4 mx-auto hover:shadow-lg hover:-translate-y-0.5 flex flex-row justify-center items-center"
    >
      <router-link :to="navigation.link">
        <div
          class="flex flex-row content-center align-center justify-center cursor-pointer w-full space-x-4 mx-auto"
        >
          <img
            :src="navigation.image"
            alt="-"
            class="w-5 h-5"
            data-test="menu-icons-test"
          />
          <p class="font-medium hover:font-semibold" data-test="menu-text-test">
            {{ navigation.text }}
          </p>
        </div></router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "DesktopNavigation",
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
    };
  },
};
</script>

<style></style>
