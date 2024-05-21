import type { Config } from "@netlify/edge-functions";

const handler = async (): Promise<Response> => {
  return new Response("Boop, user Edge Functions work");
};

export default handler;

export const config: Config = {
  path: "/boop-user",
};
