import { shallowMount } from "@vue/test-utils";
import KontaktView from "@/views/KontaktView.vue";

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(KontaktView);
});
describe("KontaktView", () => {
  it("displays hero component", () => {
    let hero = wrapper.find("[data-test='hero-component-test']");
    expect(hero.exists()).toBe(true);
  });
  it("displays a text component", () => {
    let textComponent = wrapper.find("[data-test='text-component-test']");
    expect(textComponent.exists()).toBe(true);
  });
  it("includes a section of input fields", () => {
    let inputSection = wrapper.find("[data-test='input-section-test']");
    expect(inputSection.exists()).toBe(true);
  });
  it("has four input fields", () => {
    let inputField = wrapper.findAll("[data-test='input-field-test']");
    expect(inputField.length).toBe(4);
  });
  it("has one textarea field", () => {
    let textarea = wrapper.find("[data-test='textarea-test']");
    expect(textarea.exists()).toBe(true);
  });
  it("has a button", () => {
    let button = wrapper.find("[data-test='button-test']");
    expect(button.exists()).toBe(true);
  });
});
