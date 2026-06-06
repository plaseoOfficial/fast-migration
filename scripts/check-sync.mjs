#!/usr/bin/env node
/*
 * check-sync.mjs — warnt, wenn der aktuelle Branch hinter origin/master liegt.
 * Läuft automatisch vor `npm run dev` (predev) und per `npm run sync:check`.
 * Blockiert NIE (exit 0 immer) — fetcht frisch, damit man nicht gegen einen
 * veralteten lokalen Cache arbeitet (Lehre aus dem Büro-Contract-Drift).
 */
import { spawnSync } from 'node:child_process'

const git = (args, opts = {}) =>
  spawnSync('git', args, { encoding: 'utf8', timeout: 8000, ...opts })

const y = (s) => `\x1b[33m${s}\x1b[0m`
const g = (s) => `\x1b[32m${s}\x1b[0m`
const dim = (s) => `\x1b[2m${s}\x1b[0m`

try {
  const branch = git(['rev-parse', '--abbrev-ref', 'HEAD']).stdout?.trim()
  if (!branch || branch === 'HEAD') process.exit(0)
  if (branch === 'master') { console.log(dim('[sync] auf master — kein Check.')); process.exit(0) }

  // Frisch fetchen (offline/timeout = stiller Skip)
  const fetched = git(['fetch', 'origin', '--quiet'])
  if (fetched.status !== 0) {
    console.log(y('[sync] git fetch fehlgeschlagen (offline?) — überspringe Sync-Check.'))
    process.exit(0)
  }

  const counts = git(['rev-list', '--left-right', '--count', 'origin/master...HEAD']).stdout?.trim()
  if (!counts) process.exit(0)
  const [behind, ahead] = counts.split(/\s+/).map((n) => parseInt(n, 10) || 0)

  if (behind === 0) {
    console.log(g(`[sync] ✓ ${branch} ist aktuell mit origin/master${ahead ? dim(` (+${ahead} voraus)`) : ''}.`))
    process.exit(0)
  }

  // behind > 0 → laute Warnung
  const line = '─'.repeat(64)
  console.log(y(`\n┌${line}┐`))
  console.log(y(`│ ⚠  SYNC: ${branch} ist ${behind} Commit(s) HINTER origin/master.`))
  console.log(y(`│    Vor dem Arbeiten/Finalisieren synchronisieren:`))
  console.log(y(`│      git fetch origin && git merge origin/master --no-edit`))
  console.log(y(`│      npm run typecheck   ${dim('# Komponenten-Contracts prüfen')}`))
  console.log(y(`│    Bei Konflikt: stoppen und Mensch fragen (AGENTS.md).`))
  console.log(y(`└${line}┘\n`))
  process.exit(0)
} catch {
  // Sync-Check darf den Dev-Start nie verhindern.
  process.exit(0)
}
