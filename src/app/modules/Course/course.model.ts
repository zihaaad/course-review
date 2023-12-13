import {Schema, model} from "mongoose";
import {TCourse, TCourseDetails, TTag} from "./course.interface";

const tagSchema = new Schema<TTag>(
  {
    name: {type: String, required: [true, "Name is required"]},
    isDeleted: {type: Boolean, default: false},
  },
  {_id: false}
);

const courseDetailsSchema = new Schema<TCourseDetails>(
  {
    level: {type: String, required: [true, "Level is required"]},
    description: {type: String, required: [true, "Description is required"]},
  },
  {_id: false}
);

const courseSchema = new Schema<TCourse>({
  title: {type: String, unique: true, required: [true, "Title is required"]},
  instructor: {type: String, required: [true, "Instructor is required"]},
  categoryId: {
    type: Schema.Types.ObjectId,
    required: [true, "CategoryId is required"],
    ref: "Category",
  },
  price: {type: Number, required: [true, "Price is required"]},
  tags: {type: [tagSchema], required: [true, "Tags are required"]},
  startDate: {type: String, required: [true, "startDate is required"]},
  endDate: {type: String, required: [true, "endDate is required"]},
  language: {type: String, required: [true, "Language is required"]},
  provider: {type: String, required: [true, "Provider is required"]},
  durationInWeeks: Number,
  details: {type: courseDetailsSchema, required: [true, "Details is required"]},
});

export const Course = model<TCourse>("Course", courseSchema);
