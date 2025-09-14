import { Router } from "express";
import data from "../data/transactions.json" assert { type: "json" };

const router = Router();
// GET /api/transactions
// Returns all dummy transactions
router.get("/", (_req, res) => {
  res.json(data);
});
// GET /api/transactions/by-month/:ym
// Example: /api/transactions/by-month/2025-09  -> filters by "YYYY-MM"
router.get("/by-month/:ym", (req, res) => {
  const ym = req.params.ym; // e.g., "2025-09"
  const filtered = data.filter(tx => String(tx.date).startsWith(ym));
  res.json(filtered);
});
export default router;
