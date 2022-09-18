import { shallowMount } from "@vue/test-utils";
import OnasHero from "@/components/Onas/OnasHero.vue";

let wrapper, smallHeader, bigHeader, backgroundImage;
beforeEach(() => {
  wrapper = shallowMount(OnasHero);
  smallHeader = wrapper.find("[data-test='small-header-test']");
  bigHeader = wrapper.find("[data-test='big-header-test']");
  backgroundImage = wrapper.find("[data-test = 'background-image-test']");
});

describe("OnasHero", () => {
  it("displays small header", () => {
    expect(smallHeader.exists()).toBe(true);
  });
  it("displays big header", () => {
    expect(bigHeader.exists()).toBe(true);
  });
  it("has background image", () => {
    expect(backgroundImage.exists()).toBe(true);
  });
  it("has appropriate bg image", () => {
    expect(backgroundImage.classes()).toContain("background");
  });
});
