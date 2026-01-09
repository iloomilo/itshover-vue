import { readdir, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const REGISTRY_DIR = "registry";
const ICONS_DIR = join(REGISTRY_DIR, "icons");
const OUTPUT_FILE = "registry.json";

const SCHEMA_URL = "https://shadcn-vue.com/schema/registry.json";

function toTitle(str: string) {
  return str
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function createRegistryItem(filename: string) {
  const name = basename(filename, ".vue");

  return {
    name,
    type: "registry:ui",
    title: toTitle(name),
    description: `${toTitle(name)} icon`,
    registryDependencies: [],
    dependencies: ["motion"],
    devDependencies: [],
    files: [
      {
        path: `registry/icons/${filename}`,
        type: "registry:ui",
      },
      {
        path: "registry/types/types.ts",
        type: "registry:ui",
      },
    ],
  };
}

async function generate() {
  const files = await readdir(ICONS_DIR);

  const iconFiles = files
    .filter((file) => extname(file) === ".vue")
    .sort(); 

  const items = iconFiles.map(createRegistryItem);

  const registry = {
    $schema: SCHEMA_URL,
    name: "itshover-vue",
    homepage: "https://itshover.com",
    items,
  };

  await writeFile(
    OUTPUT_FILE,
    JSON.stringify(registry, null, 2) + "\n",
    "utf8"
  );

  console.log(`✔ registry.json generated (${items.length} icons)`);
}

generate().catch((err) => {
  console.error("✖ registry generation failed");
  console.error(err);
  process.exit(1);
});

