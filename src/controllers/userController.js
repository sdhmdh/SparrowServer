import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secret, expiresIn } from "../config/jwtConfig.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn });

    const { _id, username, annualIncome, requestedLoanAmount } = user.toObject();
    const userInfo = { email: user.email, username, annualIncome, requestedLoanAmount }
    
    res.json({ token, user: userInfo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
