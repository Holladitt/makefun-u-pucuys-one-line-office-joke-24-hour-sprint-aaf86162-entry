import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I replied-all asking everyone to stop replying-all, and now there are forty-three emails arguing about who started it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
