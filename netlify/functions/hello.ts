import type { Config } from "@netlify/functions";

const handler = async (): Promise<Response> => {
  return new Response("Hello, user Functions work");
};

export default handler;

export const config: Config = {
  path: "/hello-user",
};
