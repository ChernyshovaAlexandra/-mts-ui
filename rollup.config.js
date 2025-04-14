import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [resolve(), commonjs(), typescript()],
    external: ["react", "react-dom", "styled-components", "antd"],
  },

  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm", // директория для ESM
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [resolve(), commonjs(), typescript()],
    external: ["react", "react-dom", "styled-components", "antd"],
  },
];
