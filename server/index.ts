import express, { Express, Request, Response } from "express";
const PORT = 8001;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Express !!!");
});

app.listen(PORT, () => {
  console.log("Express listening on " + PORT);
});
