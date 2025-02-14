// This will not be exposed to users.

export async function load({ fetch }) {
  const res = await fetch("/api"); // from "/routes/api/+server.js"
  const json = await res.json();
  return { json };
}
