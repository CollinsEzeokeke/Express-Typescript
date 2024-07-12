import { Express, Request, Response } from "express";

function routes(app: Express){
    
app.get(
    "/api/books/:bookId/:authorId",
    function (
      req: Request<
        { bookId: string; authorId: string },
        {},
        { name: string },
        {}
      >,
      res: Response
    ) {
      req.body;
      console.log(res.locals.name);
      return res.send(res.locals.name);
    }
  );
  
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
}