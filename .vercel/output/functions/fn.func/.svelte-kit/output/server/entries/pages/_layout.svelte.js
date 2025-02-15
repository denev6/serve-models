import { d as slot, c as pop, p as push } from "../../chunks/index2.js";
import "../../chunks/client.js";
function _layout($$payload, $$props) {
  push();
  $$payload.out += `<header></header> <main class="svelte-1djit44"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="svelte-1djit44"><button>Home</button></footer>`;
  pop();
}
export {
  _layout as default
};
