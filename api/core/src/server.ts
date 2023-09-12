import express, { Request, Response } from "express";
import shortenUrl from "./shortenUrl";

var app = express();
app.use(express.json());

app.post("/shortenUrl", function (req: Request, res: Response) {
  shortenUrl(req, res);
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
