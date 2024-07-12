import express, { NextFunction, Request, Response } from "express";
import routes from "./route";
import helmet from "helmet";

const app = express();

app.use(helmet())
app.use(express.json());

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;
    next();
  };

app.use(middleware({ name: "CollinsTech" }));


app.get("/", (req: Request, res: Response) => res.sendStatus(200))

async function throwsError() {
    throw new Error('Close this stuff');
}

//Error handling

app.get('/error', async (req: Request, res: Response) => {
    try {
        await throwsError();
        res.sendStatus(200);
    } catch (error) {
        res.status(400).send(`This is your error:${error}`);
    }
});

routes(app);

app.listen(3000, () => {
  console.log(`Application listening on port 3000`);
});
