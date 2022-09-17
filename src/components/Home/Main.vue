<template>
  <section class="mt-16">
    <article class="text-center flex flex-col justify-center">
      <h2
        class="text-zinc-300 uppercase font-medium ms:text-lg lg:text-xl xl:text-2xl"
        x-intersect="$el.classList.add('fadeLeftRight')"
      >
        Capturing moments as they happen
      </h2>
      <p
        class="mt-8 text-zinc-500 leading-6 w-4/6 mx-auto text-xs sm:text-sm sm:leading-8 xl:text-lg lg:w-1/3"
        x-intersect="$el.classList.add('fadeRightLeft')"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sit ipsum
        impedit voluptas magnam sunt voluptates totam obcaecati eos. Eligendi
        minus accusantium, nisi omnis nesciunt accusamus odit inventore commodi
        culpa?
      </p>
    </article>
    <Grid />
  </section>
</template>

<script>
import Grid from "./Grid.vue";
export default {
  name: "Main",
  components: { Grid },
};
</script>

<style></style>
