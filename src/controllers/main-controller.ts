import * as Express from "express";
export const top = (req: Express.Request, res: Express.Response) => {
  res.render("top.ejs");
};