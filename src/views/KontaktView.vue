<template>
  <section>
    <Hero
      :style="{ backgroundImage: `url(${background})` }"
      small-header="- Pustite, da vam z našimi izdelki vzamemo dih -"
      big-header="Kontakt"
      :button="false"
    />
    <Text
      header="Lorem ipsum dolor sit amet"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui."
      class="mt-16"
    />
    <section
      class="w-full lg:w-4/6 flex flex-col justify-center mt-16 mx-auto items-center space-y-8"
      x-intersect="$el.classList.add('fadeIn')"
    >
      <InputField placeholder="Ime" :type="text" />
      <InputField placeholder="Email" :type="mail" />
      <InputField placeholder="Telefinska številka" :type="phone" />
      <InputField placeholder="Kje se nahajate" :type="text" />
      <TextInput />
      <Button text="Pošljite povpraševanje" type="secondary" />
    </section>
  </section>
</template>

<script>
import Hero from "@/components/SharedComponents/Hero.vue";
import background from "/public/Kontakt/kontakt-hero.jpg";

import Text from "@/components/SharedComponents/Text.vue";
import InputField from "@/components/SharedComponents/InputField.vue";
import TextInput from "../components/Kontakt/TextInput.vue";
import Button from "@/components/SharedComponents/Button.vue";

export default {
  name: "ContactView",
  components: { Hero, Text, InputField, TextInput, Button },
  data() {
    return {
      background,
    };
  },
};
</script>

<style></style>
