import express from "express";

import jokesRoutes from "./JokesRouter";
import thoughtsRoutes from "./ThoughtRouter";

const router = express.Router();

router.use("/jokes", jokesRoutes);
router.use("/thought", thoughtsRoutes);

export default router;
