import { error } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler}
 * Get image as URL and return itself.
 * Test API for testing "/img-post"
 */
export async function POST({ request }) {
  try {
    // Parse form data
    const formData = await request.formData();
    const imageFile = formData.get("image");

    if (!imageFile || !(imageFile instanceof Blob)) {
      throw error(400, "No valid image uploaded");
    }

    // Read the image as a buffer
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    return new Response(buffer, {
      headers: {
        "Content-Type": imageFile.type || "image/jpeg",
      },
    });
  } catch (err) {
    console.error(err);
    throw error(500, "Failed to process image");
  }
}
