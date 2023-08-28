

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.cd908b69.js","_app/immutable/chunks/scheduler.f585318a.js","_app/immutable/chunks/index.bc0e1543.js","_app/immutable/chunks/PageHeading.e1865656.js"];
export const stylesheets = [];
export const fonts = [];
