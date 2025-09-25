

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/nfts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.O8K77-Yq.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CRxfEVsF.js","_app/immutable/chunks/DBUHywIO.js"];
export const stylesheets = ["_app/immutable/assets/7.CP-bkMGi.css"];
export const fonts = [];
