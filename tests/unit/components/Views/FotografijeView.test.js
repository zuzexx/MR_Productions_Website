import { shallowMount } from "@vue/test-utils";
import FotografijeView from "@/views/FotografijeView.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(FotografijeView);
});
describe("FotografijeView", () => {
  it("has a hero section", () => {
    const hero = wrapper.find("[data-test='hero-component-test']");
    expect(hero.exists()).toBe(true);
  });
  it("has a grid section", () => {
    const grid = wrapper.find("[data-test='grid-component-test']");
    expect(grid.exists()).toBe(true);
  });
});
