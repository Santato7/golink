import express from "express";
import getConnection from "../db";

const handleShortUrl = async (req: express.Request, res: express.Response) => {
  const hash = req.params.hash;
  const shortUrl = process.env.DOMAIN + hash;
  const conn = await getConnection();

  const [rows, fields] = await conn.execute(
    "SELECT URL, CLICKS FROM URL WHERE SHORT_URL = ?",
    [shortUrl]
  );

  console.log(rows);
};

export default handleShortUrl;
