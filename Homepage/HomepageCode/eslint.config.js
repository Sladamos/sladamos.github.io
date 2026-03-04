import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      "import": importPlugin,
      "unused-imports": unusedImports,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.app.json"],
        createDefaultProgram: true,
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,

      "@typescript-eslint/no-explicit-any": "warn",
      "unused-imports/no-unused-imports": "error",
      "import/order": ["warn", { alphabetize: { order: "asc" } }],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
    ],
    rules: {},
  },
  prettierConfig
);
