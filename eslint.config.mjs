const nextConfig = (await import("eslint-config-next")).default;
const config = [...nextConfig, {
  ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
}];

export default config;
