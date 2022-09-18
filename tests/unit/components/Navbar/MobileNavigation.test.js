import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import MobileNavigation from "@/components/Navbar/MobileNavigation.vue";

//test that the hamburger changes on click?

let wrapper, icons, hamburgerIcon, menu, menuText, crossImage;
beforeEach(() => {
  wrapper = shallowMount(MobileNavigation, {
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  icons = wrapper.findAll("[data-test='menu-icons-test']");
  hamburgerIcon = wrapper.find("[data-test='hamburger-display-test']");
  menu = wrapper.findAll("[data-test='menu-text-test']");
  menuText = menu.map((item) => item.text());
  crossImage = wrapper.find("[data-test='cross-icon-test']");
});
describe("MobileNavigation", () => {
  it("displays four small icons next to the menu items", () => {
    expect(icons.length).toBe(4);
  });
  it("displays the hamburger menu item", () => {
    expect(hamburgerIcon.exists()).toBe(true);
  });
  it("displays appropriate menu text", () => {
    expect(menuText).toEqual(["Domov", "Fotografije", "O nas", "Kontakt"]);
  });
  it("changes menu icon when clicked from hamburger to cross", async () => {
    expect(crossImage.exists()).toBe(false);

    await hamburgerIcon.trigger("click");
    crossImage = wrapper.find("[data-test='cross-icon-test']");
    expect(crossImage.exists()).toBe(true);
  });
});
