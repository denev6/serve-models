import { d as slot } from "../../chunks/index2.js";
import "../../chunks/client.js";
function _layout($$payload, $$props) {
  $$payload.out += `<header></header> <main class="svelte-1pdw7ds"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="svelte-1pdw7ds"><a href="/">Home</a> | <a href="https://github.com/denev6/serve-models" target="_blank">Github</a></footer>`;
}
export {
  _layout as default
};
