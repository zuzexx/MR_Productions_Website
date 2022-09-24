<template>
  <section>
    <input
      :placeholder="placeholder"
      :type="type"
      class="border-solid rounded-md border-zinc-400 border bg-zinc-900 w-[300px] sm:w-[400px] text-zinc-300 lg:w-[600px] text-base lg:text-xl px-8 py-5 placeholder:text-zinc-500 focus:outline-none"
    />
  </section>
</template>

<script>
export default {
  name: "InputField",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
