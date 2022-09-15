import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import MobileNavigation from "@/components/Navbar/MobileNavigation.vue";

//test that the hamburger changes on click?

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(MobileNavigation, {
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
});
describe("MobileNavigation", () => {
  it("displays logo", () => {
    const logo = wrapper.find("[data-test='logo-display-test']");
    expect(logo.exists()).toBe(true);
  });
  it("displays four small icons next to the menu items", () => {
    const icons = wrapper.findAll("[data-test='menu-icons-test']");
    expect(icons.length).toBe(4);
  });
  it("displays the hamburger menu item", () => {
    const hamburgerIcon = wrapper.find("[data-test='hamburger-display-test']");
    expect(hamburgerIcon.exists()).toBe(true);
  });
  it("displays appropriate menu text", () => {
    const menu = wrapper.findAll("[data-test='menu-text-test']");
    const menuText = menu.map((item) => item.text());
    expect(menuText).toEqual(["Domov", "Fotografije", "O nas", "Kontakt"]);
  });
  it("changes menu icon when clicked from hamburger to cross", async () => {
    let crossImage = wrapper.find("[data-test='cross-icon-test']");
    expect(crossImage.exists()).toBe(false);

    const hamburgerIcon = wrapper.find("[data-test='hamburger-display-test']");
    await hamburgerIcon.trigger("click");
    crossImage = wrapper.find("[data-test='cross-icon-test']");
    expect(crossImage.exists()).toBe(true);
  });
});
