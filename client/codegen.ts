import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/GraphQL/{mutations,queries}/**/*.{query,mutation}.ts",
  ignoreNoDocuments: true,
  generates: {
    "src/GraphQL/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
