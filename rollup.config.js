import dts from "rollup-plugin-dts";

export default {
  input: "dist/index.d.ts",
  output: {
    file: "types.d.ts",
    format: "es",
  },
  plugins: [dts({ respectExternal: true })],
};
