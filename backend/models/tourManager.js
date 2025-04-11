import mongoose from "mongoose";

const tourManagerSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "City is required"],
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
  },
  managerCount: {
    type: Number,
    required: [true, "Number of managers is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TourManager = mongoose.model("TourManager", tourManagerSchema);
export default TourManager;
