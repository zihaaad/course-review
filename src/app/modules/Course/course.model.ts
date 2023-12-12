import {Schema, model} from "mongoose";
import {TCourse, TCourseDetails, TTag} from "./course.interface";

const tagSchema = new Schema<TTag>({
  name: {type: String, unique: true, required: true},
  isDeleted: {type: Boolean, default: false},
});

const courseDetailsSchema = new Schema<TCourseDetails>({
  level: {type: String, required: true},
  description: {type: String, required: true},
});

const courseSchema = new Schema<TCourse>({
  title: {type: String, unique: true, required: true},
  instructor: {type: String, required: true},
  categoryId: Schema.Types.ObjectId,
  price: {type: Number, required: true},
  tags: {type: [tagSchema], required: true},
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  language: {type: String, required: true},
  provider: {type: String, required: true},
  durationInWeeks: Number,
  details: {type: courseDetailsSchema, required: true},
});

export const Course = model<TCourse>("Course", courseSchema);
