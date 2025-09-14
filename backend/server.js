import express from "express";
import cors from "cors";
// Create the app
const app = express();
// Global middleware (applies to all routes)
app.use(cors());               // Allow cross-origin requests
app.use(express.json());       // Parse JSON request bodies
// Import routers
import transactionsRouter from "./routes/transactions.js";
import budgetRouter from "./routes/budget.js";
import insightsRouter from "./routes/insights.js";
// Mount routers under /api/* 
app.use("/api/transactions", transactionsRouter);
app.use("/api/budget", budgetRouter);
app.use("/api/insights", insightsRouter);
// Health check (quick way to see the server is alive)
app.get("/", (_req, res) => {
  res.json({
    ok: true,
    service: "Rushd API",
    routes: ["/api/transactions", "/api/budget", "/api/insights"]
  });
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
