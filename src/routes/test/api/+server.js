/** @type {import('./$types').RequestHandler}
 * Test API for "/api-result"
 */
export function GET() {
  const data = {
    message: "Hello!",
    time: new Date().toISOString(),
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
