import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {

  const wrapper = mount(HelloWorld)

  it("renders properly", async () => {
    wrapper.get('[data-test="input"]').setValue('La Resolution')
    await wrapper.get('[data-test="button"]').trigger('click')
    expect(wrapper.get('[data-test="label"]').text()).toBe('La Resolution is a nice website!');
  });
});
