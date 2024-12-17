import { Router } from "express"
import { addEmployees, createCompany, createTask, getTasks } from "../controller/task.js";
import { validateParam } from "../controller/validation.js";

const router = Router()

router.post("/companies", validateParam, createCompany)
router.post("/employees", validateParam, addEmployees)
router.post("/create-task", validateParam, createTask)
router.post("/get-task", validateParam, getTasks)

export default router;