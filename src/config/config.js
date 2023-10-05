//env
import dotenv from 'dotenv';// para cargar las variables de entorno desde el archivo .env
dotenv.config(); // para cargar las variables de entorno desde el archivo .env

export const Email = {
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailPort: process.env.EMAIL_PORT,
    emailHost: process.env.EMAIL_HOST,
    email: process.env.EMAIL,
};

export const Gmail = {
    gmailUser: process.env.GMAIL_USERNAME,
    gmailPassword: process.env.GMAIL_PASSWORD,
    gmailClientId: process.env.OAUTH_CLIENTID,
    gmailClientSecret: process.env.OAUTH_CLIENT_SECRET,
    gmailAccessToken: process.env.OAUTH_ACCESS_TOKEN,
    gmailRefreshToken: process.env.OAUTH_REFRESH_TOKEN,
};