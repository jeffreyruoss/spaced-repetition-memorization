import { c as create_ssr_component, a as compute_rest_props, s as setContext, b as spread, e as escape_object, d as escape_attribute_value, f as add_attribute, g as getContext, h as escape, v as validate_component, i as subscribe } from "../../chunks/ssr.js";
/* empty css                                                    */import { i as is_void, B as Button, I as Icon } from "../../chunks/Icon.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../chunks/index2.js";
import { i as isLoggedIn } from "../../chunks/authStore.js";
import firebase from "firebase/compat/app";
const app = "";
const _300 = "";
const _400 = "";
const _700 = "";
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options",
    "role"
  ]);
  const null_transition = () => ({ duration: 0 });
  const noop = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = null_transition } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) },
        { role: escape_attribute_value(role) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["navClass", "navDivClass", "fluid"]);
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = false } = $$props;
  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0)
    $$bindings.navDivClass(navDivClass);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: "nav" }, $$restProps, { class: twMerge(navClass, $$props.class) }), {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge(navDivClass, $$props.classNavDiv, fluid && "w-full" || "container"), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
    }
  })} `;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "menuClass"]);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })} `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["href", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = navUrl ? href === navUrl : false;
  liClass = twMerge(
    "block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li> `;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ]);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let _divClass;
  let _ulClass;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  _divClass = twMerge(divClass, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  return `${!hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
const logo = "data:image/webp;base64,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";
function onAuthStateChanged(callback) {
  return firebase.auth().onAuthStateChanged(callback);
}
const UserStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  let userStatus = "No user is signed in";
  onAuthStateChanged((user) => {
    if (user) {
      userStatus = `Signed in as ${user.email}`;
      isLoggedIn.set(true);
    } else {
      userStatus = `No user is signed in`;
      isLoggedIn.set(false);
    }
  });
  $$unsubscribe_isLoggedIn();
  return `<div>${escape(userStatus)} ${$isLoggedIn ? `| <a href="#" data-svelte-h="svelte-1vdq75w">Logout</a>` : ``}</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><div class="p-0">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
    default: ({ hidden, toggle }) => {
      return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `<img${add_attribute("src", logo, 0)} class="mr-3 h-6 sm:h-9" alt="Echo Mind logo"> <span class="self-center whitespace-nowrap text-xl text-gray-400" data-svelte-h="svelte-kk91wt">ECHO MIND</span>`;
        }
      })} ${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})} ${validate_component(NavUl, "NavUl").$$render($$result, { hidden }, {}, {
        default: () => {
          return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `Home`;
            }
          })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/cards" }, {}, {
            default: () => {
              return `Create Flash Card`;
            }
          })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/cards" }, {}, {
            default: () => {
              return `Your Flash Cards`;
            }
          })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/login" }, {}, {
            default: () => {
              return `Log In`;
            }
          })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/register" }, {}, {
            default: () => {
              return `Sign Up`;
            }
          })}`;
        }
      })}`;
    }
  })}</div> <div>${validate_component(UserStatus, "UserStatus").$$render($$result, {}, {}, {})}</div></header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-1xhpvb8{display:flex;justify-content:space-between;align-items:center}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer><div class="container svelte-1xhpvb8">${validate_component(Button, "Button").$$render(
    $$result,
    {
      id: "pwa-install-button",
      color: "alternative"
    },
    {},
    {
      default: () => {
        return `Install App ${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            name: "download-outline",
            class: "w-3.5 h-3.5 ml-2"
          },
          {},
          {}
        )}`;
      }
    }
  )} <p data-svelte-h="svelte-1dmjfg8">By <a href="https://jeffruoss.com">Jeff Ruoss</a></p></div> </footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrap.svelte-1rjvc2z{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}main.svelte-1rjvc2z{flex-grow:1}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrap svelte-1rjvc2z">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1rjvc2z">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
