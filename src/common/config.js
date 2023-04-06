import * as dotenv from 'dotenv';

dotenv.config();

// environment
const NODE_ENV = process.env.NODE_ENV || 'development';

// application
const PORT = +process.env.PORT || 4000;

// JWT
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret-key';

// database
const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || 'your-mongo-db-connection-string';

export { PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY };
