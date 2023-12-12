import {NextFunction, Request, Response} from "express";
import {CategoryServices} from "./category.service";
import {categoryValidations} from "./category.validation";

const createCategroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const zodParsedData = categoryValidations.categoryValidationSchema.parse(
      req.body
    );
    const result = await CategoryServices.createCategroy(zodParsedData);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Category Created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CategoryServices.getAllCategories();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Categories retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const CategoryControllers = {
  createCategroy,
  getAllCategories,
};
