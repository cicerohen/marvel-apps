import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

import { User } from '../api/user/user.model';

export const signInWithEmail = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = await User.query('email').eq(email).exec();

  if (user.count) {
    throw new Error('User already exists');
  }

  try {
    res.json({});
  } catch (error) {
    createHttpError(401);
  }
};

export const signUpWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.query('email').eq(email).exec();

    if (user.count) {
      throw new Error('User already exists');
    }

    const newUser = new User({
      email,
      name
    });

    await newUser.setPassword(password);
    await newUser.save();

    res.json({});
  } catch (error) {
    next(createHttpError(401));
  }
};
