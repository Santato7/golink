import express from "express";

const shortenUrl = (req: express.Request, res: express.Response): any => {
  console.log(req.body.url + " back end");
  res.send(req.body.url);
};

export default shortenUrl;
