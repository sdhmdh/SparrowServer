import mongoose from "mongoose";

const lenderSchema = new mongoose.Schema(
  {
    lender: { type: String, required: true },
    logo: { type: String, required: true },
    apr: { type: Number, required: true },
    term: { type: Number, required: true },
    bookmarked: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Lenders", lenderSchema);
