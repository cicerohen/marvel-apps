import { Request, Response } from 'express';
import createHttpError from 'http-errors';

export const list = async (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (err) {
    res.json({ err });
  }
};

export const show = (req: Request, res: Response) => {
  console.log('show');
  res.json({});
};

export const create = async (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (err) {
    createHttpError(403);
  }
};

export const destroy = (req: Request, res: Response) => {
  res.json({});
  console.log('destroy');
};

export const update = (req: Request, res: Response) => {
  res.json({});
  console.log('updatr');
};

export const me = (req: Request, res: Response) => {
  res.json({});
  console.log('me');
};
