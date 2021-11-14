import peerDepsExternal from "rollup-plugin-peer-deps-external";
//import serve from 'rollup-plugin-serve';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';

export const plugins = [
  typescript(),
    //useTsconfigDeclarationDir: true
  //}),
  resolve(),
  commonjs(),
]

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/hotlight-react.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/hotlight-react.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/hotlight-react.umd.js",
      format: "umd",
      sourcemap: true,
      name: "HotlightReact"
    },
    {
      file: "dist/hotlight-react.unpkg.js",
      format: "iife",
      sourcemap: true,
      name: "HotlightReact"
    }
  ],
  plugins: plugins.concat(peerDepsExternal())
};
