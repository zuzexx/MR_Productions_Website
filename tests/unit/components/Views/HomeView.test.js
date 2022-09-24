import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(HomeView);
});

describe("HomeView", () => {
  it("Has a hero component", () => {
    const hero = wrapper.find("[data-test='hero-component-test']");
    expect(hero.exists()).toBe(true);
  });
  it("has a Main component", () => {
    const main = wrapper.find("[data-test='main-component-test']");
    expect(main.exists()).toBe(true);
  });
});
