#!/usr/bin/env node

const fs = require("node:fs")
const path = require("node:path")

/**
 * Get all .schema.ts and .fixture.ts files in a directory (non-recursive)
 * @param {string} dir - Directory path
 * @returns {string[]} - Array of .schema.ts and .fixture.ts filenames (sorted)
 */
function getSchemaFilesInDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        (entry.name.endsWith(".schema.ts") ||
          entry.name.endsWith(".fixture.ts")),
    )
    .map((entry) => entry.name)
    .sort()
}

/**
 * Get all subdirectories in a directory (non-recursive)
 * @param {string} dir - Directory path
 * @returns {string[]} - Array of subdirectory names (sorted)
 */
function getSubdirectories(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
}

/**
 * Get all directories that need index files (any directory with schema files or subdirectories)
 * @param {string} dir - Directory to search
 * @param {Set<string>} results - Accumulator for results
 */
function findAllDirectoriesNeedingIndexes(dir, results = new Set()) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const subdirs = entries.filter((entry) => entry.isDirectory())
  const hasSchemaFiles = entries.some(
    (entry) =>
      entry.isFile() &&
      (entry.name.endsWith(".schema.ts") || entry.name.endsWith(".fixture.ts")),
  )

  // Add this directory if it has schema files or subdirectories
  if (hasSchemaFiles || subdirs.length > 0) {
    results.add(dir)
  }

  // Recursively process subdirectories
  for (const entry of subdirs) {
    const fullPath = path.join(dir, entry.name)
    findAllDirectoriesNeedingIndexes(fullPath, results)
  }

  return results
}

/**
 * Create an index.ts file that exports from both schema files and subdirectories
 * This handles arbitrary nesting depth by exporting immediate children only
 * @param {string} dir - Directory path
 */
function createIndexFile(dir) {
  const schemaFiles = getSchemaFilesInDir(dir)
  const subdirs = getSubdirectories(dir)

  const allExports = []

  // Add schema file exports
  for (const filename of schemaFiles) {
    if (filename.endsWith(".schema.ts")) {
      const baseName = filename.replace(".schema.ts", "")
      allExports.push(`export * from "./${baseName}.schema";`)
    } else if (filename.endsWith(".fixture.ts")) {
      const baseName = filename.replace(".fixture.ts", "")
      allExports.push(`export * from "./${baseName}.fixture";`)
    }
  }

  // Add subdirectory exports
  for (const subdir of subdirs) {
    allExports.push(`export * from "./${subdir}";`)
  }

  // Sort all exports alphabetically
  allExports.sort()

  const content = allExports.join("\n") + (allExports.length > 0 ? "\n" : "")

  const indexPath = path.join(dir, "index.ts")
  fs.writeFileSync(indexPath, content, "utf8")
  console.log(`Created: ${indexPath}`)
}

/**
 * Recursively find all .schema.ts and .fixture.ts files in subdirectories of a directory
 * @param {string} dir - Directory to search
 * @param {string} baseDir - Base directory for relative path
 * @returns {string[]} - Array of relative paths to .schema.ts and .fixture.ts files
 */
function findAllSchemaFilesInSubdirs(dir, baseDir) {
  let results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results = results.concat(findAllSchemaFilesInSubdirs(fullPath, baseDir))
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".schema.ts") || entry.name.endsWith(".fixture.ts"))
    ) {
      // Only include if not in the root dir
      if (dir !== baseDir) {
        results.push(path.relative(baseDir, fullPath))
      }
    }
  }
  return results
}

/**
 * Create an index.ts file in src/schema that exports everything from each .schema.ts file in all subdirectories
 * and also exports from the subdirectories themselves
 * @param {string} dir - Root schema directory path
 */
function createRootIndexFileExportsFromSubdirs(dir) {
  const subdirs = getSubdirectories(dir)
  const schemaFiles = findAllSchemaFilesInSubdirs(dir, dir)

  const allExports = []

  // Add subdirectory exports
  for (const subdir of subdirs) {
    allExports.push(`export * from "./${subdir}";`)
  }

  // Add schema file exports
  for (const relPath of schemaFiles) {
    // Remove .ts extension for import
    const noExt = relPath.replace(/\.ts$/, "")
    allExports.push(`export * from "./${noExt.replace(/\\/g, "/")}";`)
  }

  // Sort all exports alphabetically
  allExports.sort()

  const content = allExports.join("\n") + (allExports.length > 0 ? "\n" : "")
  const indexPath = path.join(dir, "index.ts")
  fs.writeFileSync(indexPath, content, "utf8")
  console.log(`Created: ${indexPath}`)
}

// Main execution
const schemaDir = path.join(__dirname, "..", "src", "schema")

console.log("Searching for directories needing index files...\n")

const allDirs = Array.from(findAllDirectoriesNeedingIndexes(schemaDir))

console.log(`Found ${allDirs.length} directories needing index files:\n`)

for (const dir of allDirs) {
  console.log(`  - ${path.relative(schemaDir, dir) || "."}`)
}

console.log("\nCreating index.ts files...\n")

// Create index.ts for all directories except the root schema directory
// Each index.ts exports from immediate children (both schema files and subdirectories)
for (const dir of allDirs) {
  if (dir !== schemaDir) {
    createIndexFile(dir)
  }
}

// Create root src/schema/index.ts with all exports for backwards compatibility
createRootIndexFileExportsFromSubdirs(schemaDir)

console.log(`\nDone! Created ${allDirs.length} index.ts files.`)
