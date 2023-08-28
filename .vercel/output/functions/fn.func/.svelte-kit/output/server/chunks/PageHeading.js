import { c as create_ssr_component } from "./ssr.js";
const PageHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="font-light text-3xl text-primary-200">${slots.default ? slots.default({}) : ``} </h1>`;
});
export {
  PageHeading as P
};
