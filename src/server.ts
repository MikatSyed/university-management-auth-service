import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.log('uncaught Exception is detected ');
  console.log(error);
  process.exit(1);
});

let server: Server;
async function databaseConnection() {
  try {
    await mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      console.log(
        `Application listening on port http://localhost:${config.port}`
      );
    });
    console.log(`Database connected successfully 🧚‍♂️`);
  } catch (err) {
    console.log(`Failed to connect to database 😭: ${err}`);
  }
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection is detected ');
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
databaseConnection();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});
