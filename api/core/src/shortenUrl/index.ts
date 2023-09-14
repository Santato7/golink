import express from "express";

const shortenUrl = (req: express.Request, res: express.Response): any => {
  let userUrl: string;
  userUrl = req.body.userUrl;

  userUrl = verifyUrl(userUrl);
  res.send(req.body.userUrl);
};

const verifyUrl = (_url: string) => {
  if (!/^(https?:\/\/)/i.test(_url)) {
    _url = `https://${_url}`;
  }

  return _url;
};

export default shortenUrl;
