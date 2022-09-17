import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer/Footer";

//it displays text
//it displays appropriate text

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(Footer);
});

describe("Footer", () => {
  it("displays company logo", () => {
    let logo = wrapper.find(" [data-test='footer-logo-test']");
    expect(logo.exists()).toBe(true);
  });
  it("has copyright text", () => {
    let text = wrapper.find("[data-test='copyright-test']");
    expect(text.exists()).toBe(true);
  });
  it("displays appropriate copyright text", () => {
    let copyright = wrapper.findAll("[data-test='copyright-test']");
    let copyText = copyright.map((item) => item.text());
    expect(copyText).toEqual(["Ⓒ Copyright 2022 - All Rights reserved"]);
  });
});
