import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import DesktopNavigation from "@/components/Navbar/DesktopNavigation";

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(DesktopNavigation, {
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
});
describe("DesktopNavigation", () => {
  it("Displays small icons", () => {
    const smallIcons = wrapper.findAll("[data-test='small-icons-test']");
    expect(smallIcons.length).toBe(4);
  });
  it("displays appropriate menu text", () => {
    let menu = wrapper.findAll("[data-test='menu-text-test']");
    let menuText = menu.map((item) => item.text());
    expect(menuText).toEqual(["Domov", "Fotografije", "O nas", "Kontakt"]);
  });
});
