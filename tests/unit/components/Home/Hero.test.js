import { shallowMount } from "@vue/test-utils";
import Hero from "@/components/Home/Hero";

let wrapper,
  background,
  smallHeader,
  bigHeader,
  button,
  smallHeaderText,
  bigHeaderText;
beforeEach(() => {
  wrapper = shallowMount(Hero);
  background = wrapper.find('[data-test="background-image-test"]');
  smallHeader = wrapper.findAll("[data-test='small-header-test']");
  smallHeaderText = smallHeader.map((item) => item.text());
  bigHeader = wrapper.findAll("[data-test='big-header-test']");
  bigHeaderText = bigHeader.map((item) => item.text());
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
  it("displays appropriate small header text", () => {
    expect(smallHeaderText).toEqual(["- We take time to -"]);
  });
  it("has big header", () => {
    expect(bigHeader.length).toBe(1);
  });
  it("displays appropriate text in big header", () => {
    expect(bigHeaderText).toEqual(["stand & stare"]);
  });
  it("has a button", () => {
    expect(button.exists()).toBe(true);
  });
});
