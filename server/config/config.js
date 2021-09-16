require('dotenv').config({ path: '.env' });

const jwtSecret = process.env.JWT_SECRET;
const dbUri = process.env.DB_URI;
const port = process.env.PORT;
const sessionSecret = process.env.SESSION_SECRET

module.exports = {
    JWT_SECRET: jwtSecret,
    DB_URI: dbUri,
    PORT: port,
    SESSION_SECRET: sessionSecret
}