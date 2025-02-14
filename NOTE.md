# NOTE

## CREATE SvelteKit project

```bash
npx sv create my-app
cd my-app
npm install
npm run dev
```

## BUILD static

```bash
npm run build
```

### RUN build

```bash
npm install -g serve
npx serve build
```

## Vercel

```bash
npm install @sveltejs/adapter-vercel --save-dev
rm -rf node_modules
npm install
```
