<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style>
button {
  @apply cursor-pointer;
}
.primary {
  @apply border border-solid border-zinc-300 bg-transparent px-8 py-2 text-sm lg:text-lg sm:px-10 lg:px-12 lg:py-3 text-zinc-300 font-normal uppercase hover:font-semibold hover:border-spacing-2 hover:rounded-lg hover:bg-zinc-800 hover:bg-opacity-80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150;
}
</style>
