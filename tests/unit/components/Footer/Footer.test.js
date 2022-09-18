import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer/Footer";

//it displays text
//it displays appropriate text

let wrapper, logo, text, copyright, copyText;
beforeEach(() => {
  wrapper = shallowMount(Footer);
  logo = wrapper.find(" [data-test='footer-logo-test']");
  text = wrapper.find("[data-test='copyright-test']");
  copyright = wrapper.findAll("[data-test='copyright-test']");
  copyText = copyright.map((item) => item.text());
});

describe("Footer", () => {
  it("displays company logo", () => {
    expect(logo.exists()).toBe(true);
  });
  it("has copyright text", () => {
    expect(text.exists()).toBe(true);
  });
  it("displays appropriate copyright text", () => {
    expect(copyText).toEqual(["Ⓒ Copyright 2022 - All Rights reserved"]);
  });
});
