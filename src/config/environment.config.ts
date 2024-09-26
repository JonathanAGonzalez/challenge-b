export const Environment = Object.freeze({
  development: 'http://localhost:8080',
  production: 'https://test-production.com',
});

export type EnvironmentKeys = keyof typeof Environment;
