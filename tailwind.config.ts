import type { Config } from "tailwindcss";
export default { content: ["./index.html", "./src/**/*.{ts,tsx}"], theme: { extend: { colors: { forest: "#163f32", gold: "#c99b4e", ivory: "#fafbf8" }, fontFamily: { sans: ["DM Sans", "sans-serif"], display: ["Manrope", "sans-serif"] } } }, plugins: [] } satisfies Config;
