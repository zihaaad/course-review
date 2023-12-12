import {Request, Response} from "express";
import {CourseServices} from "./course.service";
import {courseSchema} from "./course.validation";
const createCourse = async (req: Request, res: Response) => {
  try {
    const zodParsedData = courseSchema.parse(req.body);
    const result = await CourseServices.createCourse(zodParsedData);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Course created successfully",
      data: result,
    });
  } catch (error: any) {
    res.send({
      success: false,
      message: error.message || "something went wrong!",
      error,
    });
  }
};

const getAllCourses = async (req: Request, res: Response) => {
  try {
    const result = await CourseServices.getAllCourses();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Courses retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.send({
      success: false,
      message: error.message || "something went wrong!",
      error,
    });
  }
};

export const CourseControllers = {
  createCourse,
  getAllCourses,
};
