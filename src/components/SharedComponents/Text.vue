<template>
  <article class="text-center flex flex-col justify-center">
    <h2
      class="text-zinc-300 uppercase font-medium ms:text-lg lg:text-xl xl:text-2xl"
      x-intersect="$el.classList.add('fadeLeftRight')"
    >
      {{ header }}
    </h2>
    <p
      class="mt-8 text-zinc-500 leading-6 w-4/6 mx-auto text-xs sm:text-sm sm:leading-8 xl:text-lg lg:w-2/3"
      x-intersect="$el.classList.add('fadeRightLeft')"
    >
      {{ text }}
    </p>
  </article>
</template>

<script>
export default {
  name: "Text",
  props: {
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
