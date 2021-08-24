
 export const DBConfig = {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABAE_PORT) || 3306,
    username: process.env.DATABAE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABAE_NAME
  };


