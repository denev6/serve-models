import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.COZoe1ic.js","_app/immutable/chunks/BaJEzMtw.js","_app/immutable/chunks/q-7iqr8h.js","_app/immutable/chunks/Dek7PPcY.js","_app/immutable/chunks/Dr2HJf6E.js","_app/immutable/chunks/BXTzUivX.js","_app/immutable/chunks/mM23yhBs.js"];
export const stylesheets = ["_app/immutable/assets/0.t31Z7CpG.css"];
export const fonts = [];
