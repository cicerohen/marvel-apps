import { NextFunction, Request, Response } from 'express';
import { Unathorized, Forbidden } from '../utils/http-error/http-error';
import { makeSalt, encryptPassword, signToken } from './auth.service';
import { User } from '../api/user/user.model';

export const signInWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await User.query('email').eq(email).exec();

    if (user.count === 0) {
      throw new Error('User does not exists');
    }

    if (user[0]._hashedPassword !== encryptPassword(password, user[0]._salt)) {
      throw new Error('Password does not match');
    }

    const acess_token = signToken(user[0].id);

    res.json({
      acess_token,
      user: {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email
      }
    });
  } catch (error) {
    next(new Unathorized({ extendedInfo: error.message }));
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

    const _salt = makeSalt();
    const _hashedPassword = encryptPassword(password, _salt);

    const newUser = new User({
      name,
      email,
      _salt,
      _hashedPassword
    });

    await newUser.save();

    const acess_token = signToken(newUser.id);

    res.json({
      acess_token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (err) {
    next(new Forbidden({ extendedInfo: err.message }));
  }
};
