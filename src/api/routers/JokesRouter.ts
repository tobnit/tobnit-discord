import express from "express";

import { JokesController } from "#api/controllers";

const router = express.Router();
router.get("/", JokesController.index);
router.get("/:id", JokesController.index);

router.post("/", JokesController.create);
router.put("/:id", JokesController.update);
router.delete("/:id", JokesController.delete);

export default router;
