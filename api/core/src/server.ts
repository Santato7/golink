import express from "express";

import shortenUrl from "./shortenUrl";

var app = express();

app.post("/shortenUrl", function (req: express.Request, res: express.Response) {
  console.log(req);
  res.status(200).send("ok");
  // shortenUrl(req, res);
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
