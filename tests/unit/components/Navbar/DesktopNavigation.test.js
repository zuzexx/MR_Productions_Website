import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import DesktopNavigation from "@/components/Navbar/DesktopNavigation";

let wrapper, smallIcons, menu, menuText;
beforeEach(() => {
  wrapper = shallowMount(DesktopNavigation, {
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  smallIcons = wrapper.findAll("[data-test='small-icons-test']");
  menu = wrapper.findAll("[data-test='menu-text-test']");
  menuText = menu.map((item) => item.text());
});
describe("DesktopNavigation", () => {
  it("Displays small icons", () => {
    expect(smallIcons.length).toBe(4);
  });
  it("displays appropriate menu text", () => {
    expect(menuText).toEqual(["Domov", "Fotografije", "O nas", "Kontakt"]);
  });
});
