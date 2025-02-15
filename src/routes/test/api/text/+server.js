import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler}
 * Get text input and return trimmed text.
 * Test API for "text-post"
 */

export async function POST({ request }) {
  try {
    const { text } = await request.json();
    return json({ text: text.trim() });
  } catch (error) {
    return json({ error: "Invalid request" }, { status: 400 });
  }
}
