import express from "express";
import cors from "cors";
import {CategoryRoutes} from "./app/modules/Category/category.route";
import {CourseRoutes} from "./app/modules/Course/course.route";

const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/", CourseRoutes);
app.use("/api/categories", CategoryRoutes);

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "server is running",
  });
});

export default app;
