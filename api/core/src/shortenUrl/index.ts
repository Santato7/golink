import express from "express";

const shortenUrl = (req: express.Request, res: express.Response): any => {
  res.send(req.body);
};

export default shortenUrl;
