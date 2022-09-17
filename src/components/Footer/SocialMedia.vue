<template>
  <section v-for="image in images" :key="image" class="mx-auto w-auto mt-16">
    <img
      :src="image"
      alt="social media logo"
      class="w-10 xl:w-16 hover:scale-105 hover:cursor-pointer"
    />
  </section>
</template>

<script>
export default {
  name: "SocialMedia",
  data() {
    return {
      images: [
        "/Footer/facebook.png",
        "/Footer/instagram.png",
        "/Footer/youtube.png",
      ],
    };
  },
};
</script>

<style></style>
