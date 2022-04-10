import { NextFunction, Request, Response } from "express";

import "express-async-errors";

export function error(error: Error, request: Request, response: Response, next: NextFunction) {
  if (error instanceof Error) {
    return response.status(400).json({
      error: error.message
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
}