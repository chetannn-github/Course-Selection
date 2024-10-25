import { Router } from "express";
import { signup } from "../controllers/student.controller.js";


export let authRoutes = Router();

authRoutes.post("/signup", signup);