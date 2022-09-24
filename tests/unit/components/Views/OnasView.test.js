import { shallowMount } from "@vue/test-utils";
import OnasView from "@/views/OnasView.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(OnasView);
});

describe("OnasView", () => {
  it("Has a hero component", () => {
    const hero = wrapper.find("[data-test='hero-component-test']");
    expect(hero.exists()).toBe(true);
  });
  it("has a main section component", () => {
    const main = wrapper.find("[data-test='main-component-test']");
    expect(main.exists()).toBe(true);
  });
});
