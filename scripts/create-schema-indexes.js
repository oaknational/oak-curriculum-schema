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
 * @returns {string[]} - Array of .schema.ts filenames (sorted)
 */
function getSchemaFilesInDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".schema.ts"))
    .map((entry) => entry.name)
    .sort();
}

/**
 * Get all subdirectories in a directory (non-recursive)
 * @param {string} dir - Directory path
 * @returns {string[]} - Array of subdirectory names (sorted)
 */
function getSubdirectories(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

/**
 * Find all directories that have subdirectories
 * @param {string} dir - Directory to search
 * @param {Set<string>} results - Accumulator for results
 */
function findDirsWithSubdirs(dir, results = new Set()) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const subdirs = entries.filter((entry) => entry.isDirectory());

  if (subdirs.length > 0) {
    results.add(dir);
  }

  for (const entry of subdirs) {
    const fullPath = path.join(dir, entry.name);
    findDirsWithSubdirs(fullPath, results);
  }

  return results;
}

/**
 * Create an index.ts file with wildcard exports from .schema.ts files
 * @param {string} dir - Directory path
 */
function createIndexFile(dir) {
  const schemaFiles = getSchemaFilesInDir(dir);

  // Generate export statements for each .schema.ts file (sorted)
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

/**
 * Create an index.ts file that exports from subdirectories
 * @param {string} dir - Directory path
 */
function createParentIndexFile(dir) {
  const subdirs = getSubdirectories(dir);

  // Generate export statements for each subdirectory (sorted)
  const exports = subdirs
    .map((subdir) => `export * from "./${subdir}";`)
    .join("\n");

  const content = exports + (exports ? "\n" : "");

  const indexPath = path.join(dir, "index.ts");
  fs.writeFileSync(indexPath, content, "utf8");
  console.log(`Created: ${indexPath}`);
}

/**
 * Create an index.ts file that exports from both subdirectories and schema files
 * @param {string} dir - Directory path
 * @param {string} schemaDir - Root schema directory path
 */
function createRootIndexFile(dir, schemaDir) {
  const subdirs = getSubdirectories(dir);
  const schemaFiles = getSchemaFilesInDir(dir);

  const allExports = [];

  // Add subdirectory exports (sorted)
  for (const subdir of subdirs) {
    allExports.push(`export * from "./${subdir}";`);
  }

  // Add schema file exports (sorted)
  for (const filename of schemaFiles) {
    const baseName = filename.replace(".schema.ts", "");
    allExports.push(`export * from "./${baseName}.schema";`);
  }

  // Sort all exports alphabetically
  allExports.sort();

  const content = allExports.join("\n") + (allExports.length > 0 ? "\n" : "");

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

console.log("\nSearching for directories with subdirectories...\n");

const dirsWithSubdirs = Array.from(findDirsWithSubdirs(schemaDir));

console.log(
  `Found ${dirsWithSubdirs.length} directories with subdirectories:\n`,
);

for (const dir of dirsWithSubdirs) {
  console.log(`  - ${path.relative(schemaDir, dir) || "."}`);
}

console.log("\nCreating index.ts files...\n");

// Handle the root schema directory specially - it exports both subdirectories and schema files
createRootIndexFile(schemaDir, schemaDir);

// Process other directories: parent directories export subdirectories,
// leaf directories export schema files
for (const dir of dirsWithSubdirs) {
  if (dir !== schemaDir) {
    createParentIndexFile(dir);
  }
}

// Create index files for directories with schema files that aren't already handled
for (const dir of dirsWithSchemas) {
  if (!dirsWithSubdirs.includes(dir)) {
    createIndexFile(dir);
  }
}

const totalFiles = dirsWithSchemas.length + dirsWithSubdirs.length;
console.log(`\nDone! Created ${totalFiles} index.ts files.`);
