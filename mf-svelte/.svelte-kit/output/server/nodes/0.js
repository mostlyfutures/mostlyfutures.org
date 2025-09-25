import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DyQHmo0I.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CRxfEVsF.js","_app/immutable/chunks/DBUHywIO.js","_app/immutable/chunks/DOdexuEM.js","_app/immutable/chunks/2BQ64Kpd.js","_app/immutable/chunks/DGmOwPvt.js","_app/immutable/chunks/BruQiEzM.js"];
export const stylesheets = ["_app/immutable/assets/0.X7hMKLQv.css"];
export const fonts = [];
