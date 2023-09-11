import express from "express";

const shortenUrl = (req: express.Request, res: express.Response): any => {
  res.send(req.body.url);
};

export default shortenUrl;
