import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import { environment } from '../config/config.environment';

export const isAuthenticated = () => {
  return false;
};

export const signToken = (id: string) =>
  jwt.sign({ id }, environment.secret, { expiresIn: '2h' });

export const verifyToken = (access_token: string) => {
  const decoded = jwt.verify(access_token, environment.secret);
  return decoded;
};

export const makeSalt = () => {
  return crypto.randomBytes(16).toString('base64');
};

export const encryptPassword = (plainPassword: string, salt: string) => {
  return crypto
    .pbkdf2Sync(plainPassword, salt, 100000, 64, 'sha512')
    .toString('base64');
};
