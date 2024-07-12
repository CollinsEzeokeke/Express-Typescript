import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;
    next();
  };

app.use(middleware({ name: "CollinsTech" }));

app.listen(3000, () => {
  console.log(`Application listening on port 3000`);
});
