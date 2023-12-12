import {z} from "zod";

const tagSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be string",
  }),
  isDeleted: z.boolean().default(false),
});

const courseDetailsSchema = z.object({
  level: z.string({
    required_error: "Level is required",
    invalid_type_error: "Level must be string",
  }),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be string",
    })
    .min(1),
});

export const courseSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be string",
  }),
  instructor: z.string({
    required_error: "Instructor is required",
    invalid_type_error: "Instructor must be string",
  }),
  categoryId: z.string({
    required_error: "categoryId is required",
    invalid_type_error: "categoryId must be string",
  }),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be number",
    })
    .positive(),
  tags: z.array(tagSchema),
  startDate: z.string({
    required_error: "startDate is required",
    invalid_type_error: "startDate must be string",
  }),
  endDate: z.string({
    required_error: "endDate is required",
    invalid_type_error: "endDate must be string",
  }),
  language: z.string({
    required_error: "Language is required",
    invalid_type_error: "Language must be string",
  }),
  provider: z.string({
    required_error: "Provider is required",
    invalid_type_error: "Provider must be string",
  }),
  durationInWeeks: z.number().int().positive().optional(),
  details: courseDetailsSchema,
});
