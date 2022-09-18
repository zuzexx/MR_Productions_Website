<template>
  <section class="flex flex-col items-center h-auto text-zinc-300 bg-zinc-800">
    <div
      class="background w-full h-screen flex flex-col justify-center items-center"
      data-test="background-image-test"
    >
      <div
        class="mx-auto w-auto justify-center items-center text-center space-y-5 lg:space-y-10"
      >
        <h2
          class="font-semibold text-lg uppercase lg:text-3xl sm:text-xl"
          data-test="small-header-test"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          - As good as the next picture we take -
        </h2>
        <h1
          class="font-bold text-3xl uppercase sm:text-5xl lg:text-7xl font-['Archivo']"
          data-test="big-header-test"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          about us
        </h1>
      </div>
    </div>
    <!--<img src="/Hero/hero.jpg" alt="" />-->
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.background {
  background-image: url("/public/Onas/header-onas.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
