import express from "express";
import shortenUrl from "./shortenUrl";
import cors from "cors";

var app = express();
app.use(express.json());
app.use(cors());
app.post("/shortenUrl", function (req: express.Request, res: express.Response) {
  shortenUrl(req, res);
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
