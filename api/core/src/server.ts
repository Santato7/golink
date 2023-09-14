import express, { Request, Response } from "express";
import shortenUrl from "./shortenUrl";
import handleShortUrl from "./handleShortUrl";

var app = express();
app.use(express.json());

app.get("/:hash", (req: express.Request, res: express.Response) => {
  handleShortUrl(req, res);
});

app.post("/", (req: Request, res: Response) => {
  shortenUrl(req, res);
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
