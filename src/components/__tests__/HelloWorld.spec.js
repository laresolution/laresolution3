import { describe, it, expect } from "vitest";
import { useVuetify } from '../../../vitest/vuetify'

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {


  it("renders properly", async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [useVuetify()]
      }
    });
    // wrapper.get('[data-test="input"]').setValue('La Resolution')
    
    wrapper.get('[data-test="input"] input').setValue('La Resolution')
    await wrapper.get('[data-test="button"]').trigger('click')
    expect(wrapper.get('[data-test="label"]').text()).toBe('La Resolution is a nice website!');
  });
});
