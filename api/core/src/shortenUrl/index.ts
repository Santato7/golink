import express from "express";

const shortenUrl = (req: express.Request, res: express.Response): any => {
  console.log(req);
  alert(req);
  res.send(JSON.stringify({ teste: "eae", zika: "memo" }));
};

export default shortenUrl;
