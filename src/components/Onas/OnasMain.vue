<template>
  <section class="pt-16 h-auto bg-zinc-800">
    <article class="text-center flex flex-col justify-center">
      <h2
        class="text-zinc-300 uppercase font-medium ms:text-lg lg:text-xl xl:text-2xl"
        data-test="onas-small-header-test"
        x-intersect="$el.classList.add('fadeLeftRight')"
      >
        Capturing moments as they happen
      </h2>
      <p
        class="mt-8 text-zinc-500 leading-6 w-4/6 mx-auto text-xs sm:text-sm sm:leading-8 xl:text-lg lg:w-1/3"
        data-test="onas-paragraph-test"
        x-intersect="$el.classList.add('fadeRightLeft')"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sit ipsum
        impedit voluptas magnam sunt voluptates totam obcaecati eos. Eligendi
        minus accusantium, nisi omnis nesciunt accusamus odit inventore commodi
        culpa?
      </p>
    </article>
    <article class="pt-32">
      <div
        class="w-4/6 flex flex-col justify-center mx-auto tect-center lg:text-left lg:flex-row lg:w-10/12"
      >
        <img
          src="/Onas/main-onas.jpg"
          alt=" "
          class="w-5/6 mx-auto lg:w-2/4 h-auto"
          data-test="about-us-picture"
        />
        <div class="flex flex-col">
          <h2
            class="text-zinc-300 uppercase font-medium ms:text-lg lg:text-xl xl:text-2xl mx-auto mt-16 lg:mt-0"
            data-test="onas-small-header-test"
            x-intersect="$el.classList.add('fadeLeftRight')"
          >
            Capturing moments as they happen
          </h2>
          <p
            class="mt-8 text-zinc-500 leading-6 w-5/6 mx-auto text-xs sm:text-sm sm:leading-8 xl:text-lg"
            data-test="onas-paragraph-test"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sit
            ipsum impedit voluptas magnam sunt voluptates totam obcaecati eos.
            Eligendi minus accusantium, nisi omnis nesciunt accusamus odit
            inventore commodi culpa?
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "OnasMain",
};
</script>

<style></style>
