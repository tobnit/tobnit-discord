import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  return res.json({
    message: "pong",
  });
});

export default router;
