if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0ac5aa478880e48887a65ebd8542b823"},{url:"assets/index-CnjLeM2f.js",revision:null},{url:"assets/index-DG-Z1_HW.css",revision:null},{url:"index.html",revision:"26850c2b2cd1fac716aa1e85b2e037fe"},{url:"registerSW.js",revision:"7742bee4fbecfd7352f228ff1bde72d8"},{url:"icons/icon-192x192.png",revision:"ae07028deb9fa7206bd0e909e5944be1"},{url:"icons/icon-512x512.png",revision:"5057250c7e818e631dcc63a62b4b7454"},{url:"manifest.webmanifest",revision:"ea8b19b7f6bf94493d61c043f0bf3957"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
