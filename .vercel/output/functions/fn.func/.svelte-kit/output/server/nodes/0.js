import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CZAW1HOy.js","_app/immutable/chunks/DBumpeCZ.js","_app/immutable/chunks/BWXxTf8G.js","_app/immutable/chunks/BnESbU3h.js","_app/immutable/chunks/CcmEtpdP.js","_app/immutable/chunks/B5uyAoku.js"];
export const stylesheets = ["_app/immutable/assets/0.CiFeSx31.css"];
export const fonts = [];
