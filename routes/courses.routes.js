import { Router } from "express";
import { getCourses } from "../controllers/courses.controller.js";

export let coursesRoutes = Router();

coursesRoutes.get("/", getCourses);