import express from "express";

import shortenUrl from "./shortenUrl";

var app = express();

app.get("/shortenUrl", function (req: express.Request, res: express.Response) {
  shortenUrl(req, res);
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
