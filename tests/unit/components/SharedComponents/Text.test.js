import { shallowMount } from "@vue/test-utils";
import Text from "@/components/SharedComponents/Text.vue";

let wrapper, smallHeader, paragraph;
beforeEach(() => {
  wrapper = shallowMount(Text);
  smallHeader = wrapper.find("[data-test='small-header-test']");
  paragraph = wrapper.find("[data-test='paragraph-test']");
});
describe("Text", () => {
  it("has a small header", () => {
    expect(smallHeader.exists()).toBe(true);
  });
  it("has a paragraph", () => {
    expect(paragraph.exists()).toBe(true);
  });
});
