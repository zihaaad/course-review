import express from "express";
import {CategoryControllers} from "./category.controller";

const router = express.Router();

router.post("/", CategoryControllers.createCategroy);
router.get("/", CategoryControllers.getAllCategories);

export const CategoryRoutes = router;
