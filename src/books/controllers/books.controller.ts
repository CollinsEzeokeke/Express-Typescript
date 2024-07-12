import { Express, Request, Response } from 'express';

export default function getBook(req: Request, res: Response) {
  res.send('Hello World!');
};