<template>
  <section class="pt-16 h-auto bg-zinc-800">
    <Text
      header="Capturing moments as they happen"
      text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sit ipsum
        impedit voluptas magnam sunt voluptates totam obcaecati eos. Eligendi
        minus accusantium, nisi omnis nesciunt accusamus odit inventore commodi
        culpa?"
    />
    <article class="pt-32">
      <div
        class="w-4/6 flex flex-col justify-center mx-auto tect-center lg:text-left lg:flex-row lg:w-10/12"
      >
        <img
          src="/Onas/main-onas.jpg"
          alt=" "
          class="w-1/3 mx-auto lg:w-2/5 h-auto mb-8 xl:mb-0"
          data-test="about-us-picture"
        />
        <Text
          header="Capturing moments as they happen"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sit ipsum
        impedit voluptas magnam sunt  totam obcaecati eos. Eligendi
        minus accusantium, nisi omnis nesciunt accusamus odit inventore commodi
        culpa?"
        />
      </div>
    </article>
  </section>
</template>

<script>
import Text from "../SharedComponents/Text.vue";
export default {
  name: "OnasMain",
  components: { Text },
};
</script>

<style></style>
