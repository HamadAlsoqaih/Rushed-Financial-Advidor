import { Router } from "express";
import transactions from "../data/transactions.json" assert { type: "json" };
import budget from "../data/budget.json" assert { type: "json" };
const router = Router();
// GET /api/insights
// Static summary for demo (you can replace with smarter logic later)
router.get("/", (_req, res) => {
  res.json({ summary: "You spent most on Food this month (~30%)." });
});
// GET /api/insights/top-category
// Finds which category has the highest 'spent' in the budget
router.get("/top-category", (_req, res) => {
  const categories = budget.categories || [];
  if (!categories.length) return res.json({ topCategory: null });
  const top = categories.reduce((a, b) => (a.spent > b.spent ? a : b));
  res.json({ topCategory: top.name, spent: top.spent });
});
// GET /api/insights/total-spend
// Adds up absolute values of negative transaction amounts (money going out)
router.get("/total-spend", (_req, res) => {
  const totalSpend = transactions
    .filter(tx => tx.amount < 0)
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
  res.json({ totalSpend });
});
export default router;
