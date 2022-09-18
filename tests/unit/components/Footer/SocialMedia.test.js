import { shallowMount } from "@vue/test-utils";
import SocialMedia from "@/components/Footer/SocialMedia";

let wrapper, icons;
beforeEach(() => {
  wrapper = shallowMount(SocialMedia);
  icons = wrapper.findAll("[data-test='social-media-icon-test']");
});

//it shows 3 social media icons
describe("SocialMedia", () => {
  it("shows 3 social media icons", () => {
    expect(icons.length).toBe(3);
  });
});
