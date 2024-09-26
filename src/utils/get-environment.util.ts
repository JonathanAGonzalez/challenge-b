import { Environment, EnvironmentKeys } from 'src/config/environment.config';

export const getEnvironment = (environment: EnvironmentKeys) => {
  return Environment[environment] || Environment.development;
};
