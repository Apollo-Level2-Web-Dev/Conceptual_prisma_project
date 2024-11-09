import bcrypt from "bcryptjs";
import prisma from "../../config";
import { generateToken } from "../../utils/jwt";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { name, email, password: hashedPassword, role: "USER" },
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken(user.id);
  return { token, user };
};

export const authService = {
  registerUser,
  loginUser,
};
