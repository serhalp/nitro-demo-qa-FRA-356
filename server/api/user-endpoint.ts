import { getStore } from "@netlify/blobs";

export default defineEventHandler(async () => {
  const counter = getStore("counter");
  const prevCount = Number((await counter.get("hello-count")) ?? "0");
  const count = (prevCount ?? 0) + 1;
  await counter.set("hello-count", count.toString());
  return { count };
});
