import { shallowMount } from "@vue/test-utils";
import Hero from "@/components/SharedComponents/Hero";

let wrapper, background, smallHeader, bigHeader, button;
beforeEach(() => {
  wrapper = shallowMount(Hero);
  background = wrapper.find('[data-test="background-image-test"]');
  smallHeader = wrapper.findAll("[data-test='small-header-test']");
  bigHeader = wrapper.findAll("[data-test='big-header-test']");
  button = wrapper.find("[data-test='button-test']");
});

describe("Hero", () => {
  it("has a background image", () => {
    expect(background.exists()).toBe(true);
  });
  it("Displays background image", () => {
    expect(background.classes()).toContain("background");
  });
  it("has a small header", () => {
    expect(smallHeader.length).toBe(1);
  });

  it("has big header", () => {
    expect(bigHeader.length).toBe(1);
  });

  it("has a button", () => {
    expect(button.exists()).toBe(true);
  });
});
