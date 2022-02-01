import express from "express";

import { ThoughtsController } from "#api/controllers";

const router = express.Router();
router.get("/", ThoughtsController.index);
router.get("/:id", ThoughtsController.index);

router.post("/", ThoughtsController.create);
router.put("/:id", ThoughtsController.update);
router.delete("/:id", ThoughtsController.delete);

export default router;
