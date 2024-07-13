import { Express, Request, Response } from "express";
import getBook from "./books/controllers/books.controller";

export default function routes(app: Express){
    
app.get(
    "/api/books/:bookId/:authorId",getBook);
}