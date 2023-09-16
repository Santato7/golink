import express, { Request, Response } from "express";
import shortenUrl from "./shortenUrl";
import handleShortUrl from "./handleShortUrl";

var app = express();
app.use(express.json());

app.get("/:hash", async (req: express.Request, res: express.Response) => {
  try {
    let url = await handleShortUrl(req, res);
    res.redirect(url);
  } catch (error) {
    console.error(error);
    res.status(500).json("Not Found");
  }
});

app.post("/", async (req: Request, res: Response) => {
  try {
    let response = await shortenUrl(req, res);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json("error");
  }
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
