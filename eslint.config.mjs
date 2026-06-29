import next from 'eslint-config-next';

// Next 16 removed `next lint` and ships a flat ESLint config (already includes
// core-web-vitals + TypeScript rules). Spread it, then layer project overrides.
const config = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] },
  ...next,
];

export default config;
