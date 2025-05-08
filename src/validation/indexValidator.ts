import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import logger from "../config/loggers.config";

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info("Validating Request body");
      await schema.parseAsync(req.body);

      logger.info("Request body is Valid");
      next();
    } catch (err) {
      logger.error("Request body is Invalid");
      if (err instanceof ZodError) {
        const simplifiedError = err.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        res.status(400).json({
          message: "Validation failed",
          errors: simplifiedError,
        });
        return;
      }
    }
  };
};
