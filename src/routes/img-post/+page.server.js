import { API_BASE_URL } from "$env/static/private";

// Since private $env works only in server side.
export function load() {
  return {
    apiUrl: API_BASE_URL,
  };
}
