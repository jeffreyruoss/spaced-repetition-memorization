import { c as create_ssr_component } from "../../chunks/ssr.js";
import { e as error } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function load() {
    throw error(420, "Enhance your calm");
  }
  console.log(error);
  if ($$props.load === void 0 && $$bindings.load && load !== void 0)
    $$bindings.load(load);
  return `<div data-svelte-h="svelte-19pjn0i"><h1>404</h1></div>`;
});
export {
  Error as default
};
