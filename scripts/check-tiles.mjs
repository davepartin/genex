// Verifies that every letter's charcoal illustration is present in public/tiles/.
// Run with: npm run tiles:check
import { existsSync, readdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tilesDir = join(root, 'public', 'tiles')

const source = await readFile(join(root, 'src', 'stories.ts'), 'utf8')
const expected = [...source.matchAll(/image:\s*'([^']+)'/g)].map((match) => match[1])

if (expected.length !== 24) {
  console.error(`Expected 24 tiles in src/stories.ts, found ${expected.length}.`)
  process.exit(1)
}

const missing = expected.filter((name) => !existsSync(join(tilesDir, name)))
const known = new Set(expected)
const extra = existsSync(tilesDir)
  ? readdirSync(tilesDir).filter((name) => !name.startsWith('.') && !known.has(name))
  : []

for (const name of expected) {
  console.log(`${missing.includes(name) ? 'MISSING' : '   ok  '}  public/tiles/${name}`)
}

if (extra.length > 0) {
  console.log(`\nUnused files in public/tiles/: ${extra.join(', ')}`)
}

if (missing.length > 0) {
  console.error(
    `\n${missing.length} of 24 tile images are missing. The app still runs and shows a ` +
      `lettered charcoal stand-in for each one until the JPEG is added.`,
  )
  process.exit(1)
}

console.log('\nAll 24 tile images are present.')
