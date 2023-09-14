import express from "express";
import getConnection from "../db";

const shortenUrl = (req: express.Request, res: express.Response) => {
  let userUrl: string = verifyUrl(req.body.userUrl);
  let shortUrl = process.env.DOMAIN + urlHash();

  insertUrl(userUrl, shortUrl);

  res.send(shortUrl);
};

const urlHash = () => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let urlHash: string = "";
  for (let i = 0; i < 5; i++) {
    urlHash += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return urlHash;
};

const insertUrl = async (_userUrl: string, _shortUrl: string) => {
  const conn = await getConnection();
  await conn.execute("INSERT INTO URL (SHORT_URL, URL) VALUES (?, ?)", [
    _shortUrl,
    _userUrl,
  ]);
};

const verifyUrl = (_url: string) => {
  if (!/^(https?:\/\/)/i.test(_url)) {
    _url = `https://${_url}`;
  }

  return _url;
};

export default shortenUrl;
