import { config } from 'dotenv';

config();
const envVars = process.env;
// protecting config object against any modifications after the declaration.
const configuration = Object.freeze({
  SERVICE_URL: envVars.SERVICE_URL,
  port: envVars.PORT,
  SECRET_KEY: envVars.SECRET_KEY,
});
console.log('config is::::', configuration);
export default configuration;
