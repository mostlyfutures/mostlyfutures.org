

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/landing/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BaQLvEGE.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CRxfEVsF.js","_app/immutable/chunks/DBUHywIO.js"];
export const stylesheets = ["_app/immutable/assets/6.D9RcsduK.css"];
export const fonts = [];
