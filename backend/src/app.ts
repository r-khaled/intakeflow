import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import adminRouter from "./routes/admin/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);
// Ensure admin API is mounted explicitly
app.use("/api/admin", adminRouter);
// Ensure admin router mounted
// eslint-disable-next-line no-console
console.log("Admin router mounted at /api/admin");

// Simple test route to verify server routing
app.get("/_routes_test", (_req, res) => res.json({ ok: true }));

app.use(errorHandler);

export default app;
