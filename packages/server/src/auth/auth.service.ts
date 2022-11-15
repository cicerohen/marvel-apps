import { sign, verify } from 'jsonwebtoken';

import { environment } from '../config/config.environment';

export const isAuthenticated = () => {
  return false;
};

export const signToken = (payload) => sign(payload, environment.secret);

export const verifyToken = (access_token) => {
  const decoded = verify(access_token, environment.secret);
  return decoded;
};
