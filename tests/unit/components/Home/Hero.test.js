import { shallowMount } from "@vue/test-utils";
import Hero from "@/components/Home/Hero";

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(Hero);
});

describe("Hero", () => {
  it("has a background image", () => {
    const background = wrapper.findAll('[data-test="background-image-test"]');
    expect(background.length).toBe(1);
  });
  it("Displays background image", () => {
    const background = wrapper.find('[data-test="background-image-test"]');
    expect(background.classes()).toContain("background");
  });
  it("has a small header", () => {
    const smallHeader = wrapper.find("[data-test='small-header-test']");
    expect(smallHeader.exists()).toBe(true);
  });
  it("displays appropriate small header text", () => {
    const smallHeader = wrapper.findAll("[data-test='small-header-test']");
    const smallHeaderText = smallHeader.map((item) => item.text());
    expect(smallHeaderText).toEqual(["- We take time to -"]);
  });
  it("has big header", () => {
    const bigHeader = wrapper.find("[data-test='big-header-test']");
    expect(bigHeader.exists()).toBe(true);
  });
  it("displays appropriate text in big header", () => {
    const bigHeader = wrapper.findAll("[data-test='big-header-test']");
    const bigHeaderText = bigHeader.map((item) => item.text());
    expect(bigHeaderText).toEqual(["stand & stare"]);
  });
  it("has a button", () => {
    const button = wrapper.find("[data-test='button-test']");
    expect(button.exists()).toBe(true);
  });
});
