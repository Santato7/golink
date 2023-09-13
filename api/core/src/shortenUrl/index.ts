import express from "express";

let userUrl: string;

const shortenUrl = (req: express.Request, res: express.Response): any => {
  userUrl = req.body.userUrl;
  res.send(req.body.userUrl);
};

export default shortenUrl;
