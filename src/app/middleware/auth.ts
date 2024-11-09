import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; // Ensure this is set in a .env file for security

interface AuthRequest extends Request {
  user?: { id: number; email: string; role: string };
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ message: "Authentication token missing or invalid" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
      role: string;
    };
    req.user = decoded; // Attach user data to the request object for downstream handlers
    next(); // Call next() to pass control to the next handler
    return;
  } catch (error) {
    res.status(403).json({ message: "Token is invalid or expired" });
    return;
  }
};

export default authMiddleware;
