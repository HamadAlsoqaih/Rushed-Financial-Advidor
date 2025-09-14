import { Router } from "express";
import budget from "../data/budget.json" assert { type: "json" };
const router = Router();
// GET /api/budget
// Returns the full budget snapshot
router.get("/", (_req, res) => {
  res.json(budget);
});
// GET /api/budget/categories
// Returns only the categories array
router.get("/categories", (_req, res) => {
  res.json(budget.categories || []);
});
export default router;
