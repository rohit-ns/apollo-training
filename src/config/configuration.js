import { config } from 'dotenv';
config();
const envVars = process.env;
const configuration = Object.freeze( {  //protecting config object against any modifications after the declaration.
    graphqlUri: envVars.SERVICE_URL,
    port: envVars.PORT,
    });
console.log('config is::::', configuration);
export default configuration;