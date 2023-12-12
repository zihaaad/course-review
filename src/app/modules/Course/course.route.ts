import express from "express";
import {CourseControllers} from "./course.controller";

const router = express.Router();

router.post("/course", CourseControllers.createCourse);
router.get("/courses", CourseControllers.getAllCourses);

export const CourseRoutes = router;
