import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as PageHeading } from "../../../chunks/PageHeading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(PageHeading, "PageHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Create a new flash card`;
    }
  })}</div> <div data-svelte-h="svelte-1nc7uum"><form action=""></form> </div>`;
});
export {
  Page as default
};
