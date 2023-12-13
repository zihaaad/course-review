import express from "express";
import {CourseControllers} from "./course.controller";

const router = express.Router();

router.post("/course", CourseControllers.createCourse);
router.get("/courses", CourseControllers.getAllCourses);
router.put("/courses/:courseId", CourseControllers.updateCourse);
router.get("/courses/:courseId/reviews", CourseControllers.courseWithReviews);

export const CourseRoutes = router;
