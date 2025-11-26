import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: "off",
    },
  },
  ...compat.config({
    extends: ["prettier"],
    plugins: ["no-relative-import-paths", "import", "@typescript-eslint"],
    rules: {
      quotes: ["error", "double"],
      "import/first": "error",
      "import/no-unresolved": "error",
      "import/no-named-as-default": "error",
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          warnOnUnassignedImports: true,
        },
      ],
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { allowSameFolder: true, prefix: "@", rootDir: "src" },
      ],
    },
    overrides: [
      // TypeScript specific config
      {
        files: ["**/*.ts", "**/*.tsx"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: "./tsconfig.json",
        },
        rules: {
          "@typescript-eslint/no-unused-vars": [
            "error",
            { ignoreRestSiblings: true },
          ],
        },
      },
      // make testing easier by allowing 'any'
      {
        files: ["**/*/*.test.ts"],
        rules: {
          "@typescript-eslint/no-explicit-any": "off",
          "@typescript-eslint/no-unused-vars": "off",
        },
      },
    ],
    settings: {
      "import/resolver": {
        typescript: {
          // alwaysTryTypes: true // optional, for type packages
        },
      },
    },
  }),
  // Ignores need to go in a separate config block. See https://github.com/eslint/eslint/discussions/18304
  {
    ignores: [
      "*.config.*",
      "node_modules",
      "package-lock.json",
      "dist/**",
      ".husky",
      "coverage/**",
      // // Negated pattern for .github (do NOT ignore)
      "!**/.github/**",
    ],
  },
];

export default eslintConfig;
