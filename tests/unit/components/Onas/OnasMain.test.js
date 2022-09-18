import { mount } from "@vue/test-utils";
import OnasMain from "@/components/Onas/OnasMain.vue";

let wrapper, picture, text;
beforeEach(() => {
  wrapper = mount(OnasMain);
  picture = wrapper.find("[data-test='about-us-picture']");
  text = wrapper.findAll("[data-test='text-test']");
});

describe("OnasMain", () => {
  it("has a picture", () => {
    expect(picture.exists()).toBe(true);
  });
  it("has 2 text components", () => {
    expect(text.length).toBe(2);
  });
});
