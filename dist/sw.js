if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-836a2ea9.css",revision:null},{url:"assets/index-e606bbc4.js",revision:null},{url:"index.html",revision:"122a3bb922470590f1442b3588c4a308"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sw.dev.js",revision:"e83b2cd9f4b6be8ead6845d59745710b"},{url:"green_circle_192.png",revision:"b94e5c665a4987fa0a017f702544efe0"},{url:"green_circle_512.png",revision:"7515b5124bc2fa4cea24af5638c1eb39"},{url:"manifest.webmanifest",revision:"236dd8812b215bdad1e73ab80e2ab9fd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
