import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/test';
config.LOCAL_URL = process.env.LOCAL_URL || 'http://localhost:3000';
config.APP_PORT = process.env.APP_PORT || '3000';
config.NODE_ENV = process.env.NODE_ENV || 'development';

config.EMAIL_SMTP_SERVER = process.env.EMAIL_SMTP_SERVER || 'gmail.com';
config.EMAIL_SMTP_PORT = process.env.EMAIL_SMTP_PORT || '404';

// Services
config.biptophone = process.env.SERVICES_BIPTOPHONE;

export default config;