import type { Config, Context } from "@netlify/edge-functions";

export default async (_req: Request, context: Context) => {
  const response = await context.next();
  const text = await response.text();
  return new Response(`${text}${text}`, response);
};

export const config: Config = {
  path: "/*",
  excludedPath: "/",
};
