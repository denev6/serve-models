// This will not be exposed to users.
import { TEST_API_URL } from "$lib/constants";

export async function load({ fetch }) {
  const res = await fetch(TEST_API_URL);
  const json = await res.json();
  return { json };
}
