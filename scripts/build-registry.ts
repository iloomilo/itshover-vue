import { readdir, writeFile, rm, readFile } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const REGISTRY_DIR = 'registry'
const ICONS_DIR = join(REGISTRY_DIR, 'icons')
const OUTPUT_FILE = 'registry.json'
const BUILD_OUTPUT_DIR = 'public/r'
const SCHEMA_URL = 'https://shadcn-vue.com/schema/registry.json'

//styling, no deps needed
const style = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
}

const log = {
  info: (msg: string) => console.log(`${style.cyan}ℹ  ${msg}${style.reset}`),
  success: (msg: string) => console.log(`${style.green}✔  ${msg}${style.reset}`),
  step: (msg: string) => console.log(`\n${style.bright}${style.magenta}➜  ${msg}${style.reset}`),
  warn: (msg: string) => console.log(`${style.yellow}⚠  ${msg}${style.reset}`),
  error: (msg: string) => console.error(`\n${style.red}✖  ${msg}${style.reset}`),
  sub: (msg: string) => console.log(`${style.dim}   ${msg}${style.reset}`)
}

function toTitle(str: string) {
  return str.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

async function getAllJsonFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, {
    recursive: true,
    withFileTypes: true
  })

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => {
      const path = entry.parentPath
      return join(path, entry.name)
    })
}

function createRegistryItem(filename: string) {
  const name = basename(filename, '.vue')
  return {
    name,
    type: 'registry:ui',
    title: toTitle(name),
    description: `${toTitle(name)} icon`,
    registryDependencies: [],
    dependencies: ['motion'],
    devDependencies: [],
    files: [
      {
        path: `registry/icons/${filename}`,
        type: 'registry:ui'
      },
      {
        path: 'registry/types/types.ts',
        type: 'registry:ui'
      }
    ]
  }
}

async function generate() {
  console.log(`${style.bright}🚀 Starting Registry Build Process${style.reset}`)
  const startTime = performance.now()

  try {
    // 1. cleaning the build folder
    log.step('Cleaning environment')
    if (existsSync(BUILD_OUTPUT_DIR)) {
      await rm(BUILD_OUTPUT_DIR, { recursive: true, force: true })
      log.sub(`Deleted old output: ${BUILD_OUTPUT_DIR}`)
    } else {
      log.sub('Nothing to clean.')
    }

    // 2. generate the registry.json
    log.step('Generating registry index')
    const files = await readdir(ICONS_DIR)
    const iconFiles = files.filter((file) => extname(file) === '.vue').sort()

    const items = iconFiles.map(createRegistryItem)

    const registry = {
      $schema: SCHEMA_URL,
      name: 'itshover-vue',
      homepage: 'https://itshover.com',
      items
    }

    await writeFile(OUTPUT_FILE, JSON.stringify(registry, null, 2) + '\n', 'utf8')
    log.success(`Created registry.json with ${items.length} items`)

    // 3. build registry via shadcn cli, you'll need pnpm for that
    log.step('Building registry (shadcn-vue)')
    log.sub('Running pnpm dlx shadcn-vue@latest build...')

    console.log(style.dim + '   ----------------------------------------' + style.reset)
    execSync('pnpm dlx shadcn-vue@latest build', {
      stdio: 'inherit'
    })
    console.log(style.dim + '   ----------------------------------------' + style.reset)

    // 4. fix paths in the built files, so the user won't get the registry folder
    log.step('Patching file paths')
    const jsonFiles = await getAllJsonFiles(BUILD_OUTPUT_DIR)
    let patchedCount = 0

    for (const filePath of jsonFiles) {
      const content = await readFile(filePath, 'utf8')
      const json = JSON.parse(content)
      let changed = false

      if (json.files && Array.isArray(json.files)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        json.files = json.files.map((fileItem: any) => {
          if (fileItem.path && fileItem.path.includes('registry/')) {
            fileItem.path = fileItem.path.replace('registry/', 'itshover/')
            changed = true
          }
          return fileItem
        })
      }

      if (changed) {
        await writeFile(filePath, JSON.stringify(json, null, 2), 'utf8')
        patchedCount++
      }
    }

    log.success(`Patched paths in ${patchedCount} JSON files`)

    const duration = ((performance.now() - startTime) / 1000).toFixed(2)
    console.log(
      `\n${style.green}${style.bright}✨  Build completed successfully in ${duration}s!${style.reset}\n`
    )
  } catch (err) {
    log.error('Registry generation failed unexpectedly.')
    console.error(err)
    process.exit(1)
  }
}

generate()
