// Verifies that every letter's charcoal illustration is present in public/tiles/.
// Run with: npm run tiles:check
import { existsSync, readdirSync, statSync } from 'node:fs'
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

// Names are compared against the directory listing rather than with existsSync,
// because a case-insensitive filesystem would happily accept Boot.jpeg for
// boot.jpeg and only break once the site is served from Linux.
const present = existsSync(tilesDir)
  ? readdirSync(tilesDir).filter((name) => !name.startsWith('.') && !name.endsWith('.md'))
  : []

const key = (name) => name.toLowerCase().replace(/\.(jpe?g|png|webp)$/, '').replace(/[^a-z0-9]/g, '')
const byKey = new Map(present.map((name) => [key(name), name]))
const exact = new Set(present)

const missing = []
for (const name of expected) {
  if (exact.has(name)) {
    const { size } = statSync(join(tilesDir, name))
    console.log(`   ok    public/tiles/${name}  (${Math.round(size / 1024)} KB)`)
    continue
  }
  const nearMatch = byKey.get(key(name))
  missing.push({ name, nearMatch })
  console.log(
    nearMatch
      ? `RENAME   public/tiles/${nearMatch}  ->  ${name}`
      : `MISSING  public/tiles/${name}`,
  )
}

const claimed = new Set(expected.map(key))
const extra = present.filter((name) => !claimed.has(key(name)))
if (extra.length > 0) {
  console.log(`\nUnused files in public/tiles/: ${extra.join(', ')}`)
}

if (missing.length > 0) {
  const renames = missing.filter((entry) => entry.nearMatch)
  if (renames.length > 0) {
    console.error(
      `\n${renames.length} file(s) are present but misnamed. Filenames are case-sensitive once ` +
        `the site is served, so these must match exactly.`,
    )
  }
  console.error(
    `\n${missing.length} of 24 tile images are missing. The app still runs and shows a ` +
      `lettered charcoal stand-in for each one until the JPEG is added.`,
  )
  process.exit(1)
}

console.log('\nAll 24 tile images are present.')
