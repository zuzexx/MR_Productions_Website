import { shallowMount } from "@vue/test-utils";
import OnasMain from "@/components/Onas/OnasMain.vue";

let wrapper, smallHeader, paragraph;
beforeEach(() => {
  wrapper = shallowMount(OnasMain);
  smallHeader = wrapper.findAll("[data-test='onas-small-header-test']");
  paragraph = wrapper.findAll("[data-test='onas-paragraph-test']");
});

describe("OnasMain", () => {
  it("has a small header", () => {
    expect(smallHeader.length).toBe(1);
  });
  it("has a paragraph", () => {
    expect(paragraph.length).toBe(1);
  });
});
