import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    requestedLoanAmount: { type: Number, required: true },
    annualIncome: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
