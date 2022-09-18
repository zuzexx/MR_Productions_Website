import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navbar/Navigation";

let wrapper, logo;
beforeEach(() => {
  wrapper = shallowMount(Navigation);
  logo = wrapper.find("[data-test='logo-display-test']");
});

describe("Navigation", () => {
  it("displays logo", () => {
    expect(logo.exists()).toBe(true);
  });
});
