

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.75d43a38.js","_app/immutable/chunks/scheduler.f585318a.js","_app/immutable/chunks/index.bc0e1543.js","_app/immutable/chunks/Icon.ea50235a.js","_app/immutable/chunks/Input.900dfd07.js","_app/immutable/chunks/PageHeading.e1865656.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
