import {NextFunction, Request, Response} from "express";
import {ReviewValidationSchema} from "./review.validation";
import {ReviewServices} from "./review.service";

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const zodParsedData = ReviewValidationSchema.parse(req.body);
    const result = await ReviewServices.createReview(zodParsedData);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Review created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ReviewControllers = {
  createReview,
};
