<template>
  <section class="flex flex-col items-center h-auto text-zinc-300">
    <div
      class="background w-full h-screen flex flex-col justify-center items-center"
    >
      <div
        class="mx-auto w-auto justify-center items-center text-center space-y-5 lg:space-y-10"
      >
        <h2 class="font-semibold text-lg uppercase lg:text-3xl sm:text-xl">
          - We take time to -
        </h2>
        <h1
          class="font-bold text-3xl uppercase sm:text-5xl lg:text-7xl font-['Archivo']"
        >
          stand & stare
        </h1>
        <Button text="BE INSPIRED" type="primary" />
      </div>
    </div>
    <!--<img src="/Hero/hero.jpg" alt="" />-->
  </section>
</template>

<script>
import Button from "../SharedComponents/Button.vue";
export default {
  name: "Hero",
  components: { Button },
};
</script>

<style>
.background {
  background-image: url("/public/Hero/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
