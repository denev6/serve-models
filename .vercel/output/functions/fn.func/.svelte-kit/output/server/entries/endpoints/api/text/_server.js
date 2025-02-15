import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  try {
    const { text } = await request.json();
    console.log(text);
    if (!text) {
      return json({ error: "No text provided" }, { status: 400 });
    }
    return json({ text: text.trim() });
  } catch (error) {
    return json({ error: "Invalid request" }, { status: 400 });
  }
}
export {
  POST
};
