import { e as error } from "../../../../chunks/index.js";
async function POST({ request }) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("image");
    if (!imageFile || !(imageFile instanceof Blob)) {
      throw error(400, "No valid image uploaded");
    }
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    return new Response(buffer, {
      headers: {
        "Content-Type": imageFile.type || "image/jpeg"
      }
    });
  } catch (err) {
    console.error(err);
    throw error(500, "Failed to process image");
  }
}
export {
  POST
};
