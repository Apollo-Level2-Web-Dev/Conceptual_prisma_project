import { Request, Response } from "express";
import { authService } from "./auth.service";

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await authService.loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const authController = {
  register,
  login,
};
