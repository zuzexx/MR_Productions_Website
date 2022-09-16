import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navbar/Navigation";

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(Navigation);
});

describe("Navigation", () => {
  it("displays logo", () => {
    const logo = wrapper.find("[data-test='logo-display-test']");
    expect(logo.exists()).toBe(true);
  });
});
