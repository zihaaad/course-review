/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ErrorRequestHandler} from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: "something went wrong!",
    errorMessage: err.message,
    errorDetails: err,
  });
};

export default globalErrorHandler;
