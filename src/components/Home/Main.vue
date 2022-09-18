<template>
  <section class="mt-16">
    <Text
      header="Capturing moments as they happen"
      text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sit ipsum
        impedit voluptas magnam sunt voluptates totam obcaecati eos. Eligendi
        minus accusantium, nisi omnis nesciunt accusamus odit inventore commodi
        culpa?"
    />
    <Grid />
  </section>
</template>

<script>
import Grid from "../SharedComponents/Grid.vue";
import Text from "../SharedComponents/Text.vue";
export default {
  name: "Main",
  components: { Grid, Text },
};
</script>
