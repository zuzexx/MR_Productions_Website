import { shallowMount } from "@vue/test-utils";
import SocialMedia from "@/components/Footer/SocialMedia";

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(SocialMedia);
});

//it shows 3 social media icons
describe("SocialMedia", () => {
  it("shows 3 social media icons", () => {
    let icons = wrapper.findAll("[data-test='social-media-icon-test']");
    expect(icons.length).toBe(3);
  });
});
