

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e3bc659e.js","_app/immutable/chunks/scheduler.f585318a.js","_app/immutable/chunks/index.bc0e1543.js","_app/immutable/chunks/control.f5b05b5f.js"];
export const stylesheets = [];
export const fonts = [];
