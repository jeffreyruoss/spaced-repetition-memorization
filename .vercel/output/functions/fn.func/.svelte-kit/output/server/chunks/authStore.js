import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { w as writable } from "./index2.js";
const firebaseConfig = {
  apiKey: "AIzaSyBReMdwPH9QpNupKnZbDjWNqC1h1dUv7t0",
  authDomain: "spaced-repetition-memorization.firebaseapp.com",
  projectId: "spaced-repetition-memorization",
  storageBucket: "spaced-repetition-memorization.appspot.com",
  messagingSenderId: "424310139081",
  appId: "1:424310139081:web:0b2d0d4392ff9500510518",
  measurementId: "G-59H9WQKC7H"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const defaults = {
  duration: 4e3,
  initial: 1,
  next: 0,
  pausable: false,
  dismissable: true,
  reversed: false,
  intro: { x: 256 }
};
function createToast() {
  const { subscribe, update } = writable(new Array());
  const options = {};
  let count = 0;
  function _obj(obj) {
    return obj instanceof Object;
  }
  function _init(target = "default", opts = {}) {
    options[target] = opts;
    return options;
  }
  function push(msg, opts) {
    const param = {
      target: "default",
      ..._obj(msg) ? (
        /** @type {SvelteToastOptions} */
        msg
      ) : { ...opts, msg }
    };
    const conf = options[param.target] || {};
    const entry = {
      ...defaults,
      ...conf,
      ...param,
      theme: { ...conf.theme, ...param.theme },
      classes: [...conf.classes || [], ...param.classes || []],
      id: ++count
    };
    update((n) => entry.reversed ? [...n, entry] : [entry, ...n]);
    return count;
  }
  function pop(id) {
    update((n) => {
      if (!n.length || id === 0)
        return [];
      if (typeof id === "function")
        return n.filter((i) => id(i));
      if (_obj(id))
        return n.filter(
          /** @type {SvelteToastOptions[]} i */
          (i) => i.target !== id.target
        );
      const found = id || Math.max(...n.map((i) => i.id));
      return n.filter((i) => i.id !== found);
    });
  }
  function set(id, opts) {
    const param = _obj(id) ? id : { ...opts, id };
    update((n) => {
      const idx = n.findIndex((i) => i.id === param.id);
      if (idx > -1) {
        n[idx] = { ...n[idx], ...param };
      }
      return n;
    });
  }
  return { subscribe, push, pop, set, _init };
}
createToast();
const ToastItem_svelte_svelte_type_style_lang = "";
const SvelteToast_svelte_svelte_type_style_lang = "";
const isLoggedIn = writable(false);
export {
  isLoggedIn as i
};