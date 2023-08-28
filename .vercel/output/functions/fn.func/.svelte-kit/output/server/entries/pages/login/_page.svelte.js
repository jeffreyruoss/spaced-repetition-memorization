import { c as create_ssr_component, i as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button, I as Icon } from "../../../chunks/Icon.js";
/* empty css                                                       */import { L as Label, I as Input } from "../../../chunks/Input.js";
import { P as PageHeading } from "../../../chunks/PageHeading.js";
import { i as isLoggedIn } from "../../../chunks/authStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  let email = "";
  let password = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div>${validate_component(PageHeading, "PageHeading").$$render($$result, {}, {}, {
      default: () => {
        return `Log in`;
      }
    })}</div> <div>${$isLoggedIn ? `<p class="mb-2 text-lg" data-svelte-h="svelte-1bpf3wp">You are logged in!</p> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "/create",
        size: "lg",
        class: "mb-3 mr-3 pl-3"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              name: "circle-plus-outline",
              class: "w-5 h-5 mr-2"
            },
            {},
            {}
          )} 
			Create a flash card`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "/cards",
        size: "lg",
        class: "mb-2 pl-3",
        color: "light"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              name: "brain-outline",
              class: "w-5 h-5 mr-2"
            },
            {},
            {}
          )} 
			See all of your flash cards`;
        }
      }
    )}` : `<form action="#">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "block mb-2" }, {}, {
      default: () => {
        return `Your Email`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "email",
        size: "lg",
        placeholder: "name@example.com",
        type: "email",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
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
        type: "password",
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
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
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "lg",
        class: "mt-4",
        type: "submit"
      },
      {},
      {
        default: () => {
          return `Log in`;
        }
      }
    )}</form>`} </div>`;
  } while (!$$settled);
  $$unsubscribe_isLoggedIn();
  return $$rendered;
});
export {
  Page as default
};
