import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Icon, B as Button } from "../../../chunks/Icon.js";
/* empty css                                                       */import { L as Label, I as Input } from "../../../chunks/Input.js";
import { P as PageHeading } from "../../../chunks/PageHeading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(PageHeading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Sign up`;
    }
  })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: "block mb-2" }, {}, {
    default: () => {
      return `Your Email`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "email",
      size: "lg",
      placeholder: "name@example.com",
      type: "email"
    },
    {},
    {
      left: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            name: "envelope-outline",
            slot: "left",
            class: "ml-1 w-5 h-5 text-gray-500 dark:text-gray-400"
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(Label, "Label").$$render(
    $$result,
    {
      for: "password",
      class: "block mb-2 mt-4"
    },
    {},
    {
      default: () => {
        return `Password`;
      }
    }
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "password",
      size: "lg",
      placeholder: "mYcoo1Pas$word",
      type: "password"
    },
    {},
    {
      left: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            name: "lock-outline",
            slot: "left",
            class: "ml-1 w-5 h-5 text-gray-500 dark:text-gray-400"
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render($$result, { size: "lg", class: "mt-4" }, {}, {
    default: () => {
      return `Sign up`;
    }
  })} </div>`;
});
export {
  Page as default
};
