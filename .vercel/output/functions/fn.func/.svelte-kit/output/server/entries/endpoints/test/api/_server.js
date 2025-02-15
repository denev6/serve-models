function GET() {
  const data = {
    message: "Hello!",
    time: (/* @__PURE__ */ new Date()).toISOString()
  };
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
export {
  GET
};
