<template>
  <section
    class="flex flex-row flex-wrap justify-center mt-16 max-w-screen-4xl mx-auto"
  >
    <div
      v-for="grid in grids"
      :key="grid"
      class="flex flex-col bg-zinc-900 mt-12 text-center w-11/12 md:w-1/3 mx-3 max-w-lg xl:mx-6 hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-150"
      x-intersect="$el.classList.add('swingIn')"
    >
      <img
        :src="grid.image"
        alt="image"
        x-intersect="$el.classList.add('rollInBlurredLeft')"
      />
      <h3
        class="uppercase text-zinc-400 tracking-widest py-7 text-xl hover:underline hover:font-semibold hover:scale-105 transition duration-150"
        x-intersect="$el.classList.add('fadeLeftRight')"
      >
        {{ grid.text }}
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Grid",
  data() {
    return {
      grids: [
        { image: "/Main/landscape.jpg", text: "landscape" },
        { image: "/Main/wedding.jpg", text: "wedding" },
        { image: "/Main/travel.jpg", text: "travel" },
        { image: "/Main/fashion.jpg", text: "fashion" },
        { image: "/Main/business.jpg", text: "business" },
        { image: "/Main/buildings.jpg", text: "buildings" },
        { image: "/Main/people.jpg", text: "people" },
        { image: "/Main/wildlife.jpg", text: "wildlife" },
      ],
    };
  },
};
</script>

<style></style>
