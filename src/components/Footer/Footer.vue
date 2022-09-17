<template>
  <section
    class="bg-zinc-800 w-full mx-auto flex flex-col justify-center text-zinc-400 -mt-2 pb-7"
  >
    <div
      class="bg-zinc-900 w-5/6 mx-auto flex flex-col text-center justify-center mt-16 h-auto"
    >
      <img
        src="/logo.png"
        alt="logo"
        class="mt-16 w-32 h-auto mx-auto lg:w-40 xl:w-52"
        data-test="footer-logo-test"
      />
      <p
        class="font-light mt-16 xl:text-xl opacity-90"
        data-test="copyright-test"
      >
        Ⓒ Copyright 2022 - All Rights reserved
      </p>
      <div class="flex flex-row w-40 mx-auto pb-16 xl:w-80">
        <SocialMedia />
      </div>
    </div>
  </section>
</template>
<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  name: "Footer",
  components: { SocialMedia },
};
</script>
