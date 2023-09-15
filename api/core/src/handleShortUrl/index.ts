import express from "express";
import getConnection from "../db";

const handleShortUrl = async (req: express.Request, res: express.Response) => {
  try {
    const hash = req.params.hash;
    const shortUrl = hash;
    const conn = await getConnection();
  
    const [rows, fields] = await conn.execute(
      "SELECT URL, CLICKS FROM URL WHERE SHORT_URL = ?",
      [shortUrl]
    );
  
    if (rows.length === 0) {
      throw "Not Found";
    }
    return rows[0].URL;
  } catch (error) {
    throw error;
  }
};

export default handleShortUrl;
