process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import * as http from 'http';
import * as dotenv from 'dotenv';
import { environment } from './config/config.environment';
import app from './app';

dotenv.config();

const server = http.createServer(app);

setImmediate(() => {
  server.listen(environment.port as number, '0.0.0.0', () => {
    console.log(
      'Express server listening on port %s, in %s mode',
      environment.port,
      process.env.NODE_ENV
    );
  });
});
