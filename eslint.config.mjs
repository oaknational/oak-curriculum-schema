import globals from "globals"

import path from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import pluginJs from "@eslint/js"
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths"

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
})

export default [
  {
    ignores: ["**/*.js", "**/*.mjs", "**/*.cjs", "dist/**", "node_modules/**"],
  },
  ...compat.extends("standard-with-typescript").map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),
  {
    files: ["**/*.ts"],
    plugins: {
      "no-relative-import-paths": noRelativeImportPaths,
    },
    rules: {
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        {
          allowSameFolder: true,
          prefix: "@",
          rootDir: "src",
        },
      ],
      quotes: ["error", "double"],
      "@typescript-eslint/quotes": ["error", "double"],
    },
  },
  ...compat.extends("prettier"),
]
