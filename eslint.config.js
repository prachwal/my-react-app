import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      "linebreak-style": ["error", "windows"],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".tsx", ".jsx"] },
      ],
      "arrow-body-style": ["error", "as-needed"],
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/prop-types": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        { ts: "never", tsx: "never", js: "never", jsx: "never" },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.ts",
            "**/*.test.tsx",
            "**/*.spec.ts",
            "**/*.spec.tsx",
            "**/*.stories.ts",
            "**/*.stories.tsx",
            "**/setupTests.ts",
          ],
        },
      ],
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];
