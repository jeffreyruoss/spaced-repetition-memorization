if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-e3b0c442.css",revision:null},{url:"assets/index-ebe451e8.js",revision:null},{url:"index.html",revision:"092ce3705b17ec33f8d23973284e21ed"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"green_circle_192.png",revision:"b94e5c665a4987fa0a017f702544efe0"},{url:"green_circle_512.png",revision:"7515b5124bc2fa4cea24af5638c1eb39"},{url:"manifest.webmanifest",revision:"236dd8812b215bdad1e73ab80e2ab9fd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
