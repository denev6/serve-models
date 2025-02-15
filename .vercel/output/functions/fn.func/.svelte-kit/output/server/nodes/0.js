import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CNrDi9t-.js","_app/immutable/chunks/vMUy-l4-.js","_app/immutable/chunks/BmosVzqU.js","_app/immutable/chunks/CTd9Z4B1.js","_app/immutable/chunks/2_8oiVJZ.js","_app/immutable/chunks/DDEkrzKO.js","_app/immutable/chunks/BWH4WX17.js"];
export const stylesheets = ["_app/immutable/assets/0.t31Z7CpG.css"];
export const fonts = [];
