import {TCourse} from "./course.interface";
import moment from "moment";
import {Course} from "./course.model";

const createCourse = async (payload: TCourse) => {
  const endDate = moment(payload.endDate);
  const startDate = moment(payload.startDate);

  const weeksDuration: number = Math.ceil(
    endDate.diff(startDate, "weeks", true)
  );
  payload.durationInWeeks = weeksDuration;

  const result = await Course.create(payload);
  return result;
};

const getAllCourses = async () => {
  const result = await Course.find();
  return result;
};

export const CourseServices = {
  createCourse,
  getAllCourses,
};
