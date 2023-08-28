

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b481dc76.js","_app/immutable/chunks/scheduler.f585318a.js","_app/immutable/chunks/index.bc0e1543.js"];
export const stylesheets = ["_app/immutable/assets/2.e5a865cd.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
