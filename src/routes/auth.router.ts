import express  from "express";

const router = express.Router();

router.get("/auth", (_req, res) => {
    res.send("Hello from auth");
});

router.post("/auth", (_req, res) => {
    res.send("Hello from auth");
});

export default router;