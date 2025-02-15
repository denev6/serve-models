import adapterAuto from "@sveltejs/adapter-auto";
import adapterStatic from "@sveltejs/adapter-static";
import adapterVercel from "@sveltejs/adapter-vercel";
//import { vitePreprocess } from "@sveltejs/kit/vite";

const ADAPTER_TYPE = "vercel";
let my_adapter = adapterAuto();

if (ADAPTER_TYPE === "static") {
  my_adapter = adapterStatic({
    pages: "build",
    assets: "build",
    fallback: undefined,
    precompress: false, // i.e. SASS, TS, Tailwind etc.
    strict: true,
  });
} else if (ADAPTER_TYPE === "vercel") {
  my_adapter = adapterVercel({
    images: {
      sizes: [224, 640, 1200],
      domains: ["example-app.vercel.app"],
      formats: ["image/avif", "image/webp"],
    },
  });
}

/** @type {import('@sveltejs/kit').Config} */
export default {
  //preprocess: vitePreprocess(),
  kit: {
    adapter: my_adapter,
  },
};
