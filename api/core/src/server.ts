import express from "express";
import cors from "cors";
import shortenUrl from "./shortenUrl";

var app = express();
app.use(express.json());

const corsOptions = {
  origin: "https://santato.dev", // Substitua pelo seu domínio
};

app.post(
  "/shortenUrl",
  cors(corsOptions),
  function (req: express.Request, res: express.Response) {
    shortenUrl(req, res);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
  }
);

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
