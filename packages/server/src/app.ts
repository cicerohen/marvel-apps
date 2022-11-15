import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import dynamoose from 'dynamoose';

import user from './api/user';
import auth from './auth';

import { environment } from './config/config.environment';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ddb = new dynamoose.aws.ddb.DynamoDB(environment.aws);
dynamoose.aws.ddb.set(ddb);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', auth);
app.use('/api/users', user);

export default app;
