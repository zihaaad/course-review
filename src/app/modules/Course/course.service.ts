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

const updateCourse = async (id: string, payload: Partial<TCourse>) => {
  const {details, tags, ...remainingCourseData} = payload;

  const modifiedData: Record<string, unknown> = {
    ...remainingCourseData,
  };

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedData[`details.${key}`] = value;
    }
  }

  await Course.findByIdAndUpdate(id, modifiedData);

  if (tags && tags.length > 0) {
    const deletedTags = tags
      .filter((element) => element.name && element.isDeleted)
      .map((element) => element.name);

    await Course.findByIdAndUpdate(id, {
      $pull: {tags: {name: {$in: deletedTags}}},
    });

    const newCourseTags = tags?.filter(
      (element) => element.name && !element.isDeleted
    );

    await Course.findByIdAndUpdate(id, {
      $addToSet: {tags: {$each: newCourseTags}},
    });
  }

  const result = await Course.findById(id);
  return result;
};

export const CourseServices = {
  createCourse,
  getAllCourses,
  updateCourse,
};
