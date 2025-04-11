import express from "express";
import TourManager from "../models/tourManager.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { city, startDate, endDate, managerCount } = req.body;

    if (!city || !startDate || !endDate || !managerCount) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTourManager = new TourManager({
      city,
      startDate,
      endDate,
      managerCount,
    });

    await newTourManager.save();

    res.status(201).json({ message: "Tour manager request submitted!" });
  } catch (error) {
    console.error("Tour manager submission error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
