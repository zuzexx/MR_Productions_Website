import { shallowMount } from "@vue/test-utils";
import OnasMain from "@/components/Onas/OnasMain.vue";

let wrapper, smallHeader, paragraph, picture;
beforeEach(() => {
  wrapper = shallowMount(OnasMain);
  smallHeader = wrapper.findAll("[data-test='onas-small-header-test']");
  paragraph = wrapper.findAll("[data-test='onas-paragraph-test']");
  picture = wrapper.find("[data-test='about-us-picture']");
});

describe("OnasMain", () => {
  it("has a small header", () => {
    expect(smallHeader.length).toBe(2);
  });
  it("has a paragraph", () => {
    expect(paragraph.length).toBe(2);
  });
  it("has a picture", () => {
    expect(picture.exists()).toBe(true);
  });
});
