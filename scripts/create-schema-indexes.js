#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

/**
 * Recursively find all directories containing .schema.ts files
 * @param {string} dir - Directory to search
 * @param {string[]} results - Accumulator for results
 * @returns {string[]} - Array of directory paths containing .schema.ts files
 */
function findDirsWithSchemaFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let hasSchemaFile = false;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recursively search subdirectories
      findDirsWithSchemaFiles(fullPath, results);
    } else if (entry.isFile() && entry.name.endsWith(".schema.ts")) {
      hasSchemaFile = true;
    }
  }

  if (hasSchemaFile) {
    results.push(dir);
  }

  return results;
}

/**
 * Get all .schema.ts files in a directory (non-recursive)
 * @param {string} dir - Directory path
 * @returns {string[]} - Array of .schema.ts filenames
 */
function getSchemaFilesInDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".schema.ts"))
    .map((entry) => entry.name);
}

/**
 * Create an index.ts file with wildcard exports from .schema.ts files
 * @param {string} dir - Directory path
 */
function createIndexFile(dir) {
  const schemaFiles = getSchemaFilesInDir(dir);

  // Generate export statements for each .schema.ts file
  const exports = schemaFiles
    .map((filename) => {
      const baseName = filename.replace(".schema.ts", "");
      return `export * from "./${baseName}.schema";`;
    })
    .join("\n");

  const content = exports + (exports ? "\n" : "");

  const indexPath = path.join(dir, "index.ts");
  fs.writeFileSync(indexPath, content, "utf8");
  console.log(`Created: ${indexPath}`);
}

// Main execution
const schemaDir = path.join(__dirname, "..", "src", "schema");

console.log("Searching for directories with .schema.ts files...\n");

const dirsWithSchemas = findDirsWithSchemaFiles(schemaDir);

console.log(
  `Found ${dirsWithSchemas.length} directories with .schema.ts files:\n`,
);

for (const dir of dirsWithSchemas) {
  console.log(`  - ${path.relative(schemaDir, dir) || "."}`);
}

console.log("\nCreating index.ts files with exports...\n");

for (const dir of dirsWithSchemas) {
  createIndexFile(dir);
}

console.log(`\nDone! Created ${dirsWithSchemas.length} index.ts files.`);
