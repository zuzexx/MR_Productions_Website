<template>
  <section>
    <Hero
      :style="{ backgroundImage: 'url(/Kontakt/kontakt-hero.jpg)' }"
      small-header="- Pustite, da vam z našimi izdelki vzamemo dih -"
      big-header="Kontakt"
      :button="false"
      data-test="hero-component-test"
    />
    <Text
      header="Lorem ipsum dolor sit amet"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui."
      class="mt-16"
      data-test="text-component-test"
    />
    <section
      class="w-full lg:w-4/6 flex flex-col justify-center mt-16 mx-auto items-center space-y-8"
      x-intersect="$el.classList.add('fadeIn')"
      data-test="input-section-test"
    >
      <InputField placeholder="Ime" :type="text" data-test="input-field-test" />
      <InputField
        placeholder="Email"
        :type="mail"
        data-test="input-field-test"
      />
      <InputField
        placeholder="Telefinska številka"
        :type="phone"
        data-test="input-field-test"
      />
      <InputField
        placeholder="Kje se nahajate"
        :type="text"
        data-test="input-field-test"
      />
      <TextInput data-test="textarea-test" />
      <Button
        text="Pošljite povpraševanje"
        type="secondary"
        data-test="button-test"
      />
    </section>
  </section>
</template>

<script>
import Hero from "@/components/SharedComponents/Hero.vue";
//import background from "/public/Kontakt/kontakt-hero.jpg";
import Text from "@/components/SharedComponents/Text.vue";
import InputField from "@/components/SharedComponents/InputField.vue";
import TextInput from "../components/Kontakt/TextInput.vue";
import Button from "@/components/SharedComponents/Button.vue";

export default {
  name: "ContactView",
  components: { Hero, Text, InputField, TextInput, Button },
};
</script>

<style></style>
