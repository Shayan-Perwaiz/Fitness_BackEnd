import { NextFunction, Request, Response } from "express";

export const pingContoller = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("pong ping");
};
