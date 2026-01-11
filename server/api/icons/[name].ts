import fs from "node:fs/promises";
import path from "node:path";

const toPascalCase = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");

  if (!name) {
    throw createError({ statusCode: 400, message: "Name is required" });
  }

  const fileName = toPascalCase(name);
  const filePath = path.join(
    process.cwd(),
    "registry",
    "icons",
    `${fileName}.vue`,
  );

  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (e) {
    throw createError({ statusCode: 404, message: "Icon not found" });
  }
});
