import config from 'config';

// Checks if the current environment is development
export const isDevEnv = config.env === 'development';

// Checks if the current environment is staging
export const isStagingEnv = config.env === 'staging';

// Checks if the current environment is staging
export const isProductionEnv = config.env === 'production';
