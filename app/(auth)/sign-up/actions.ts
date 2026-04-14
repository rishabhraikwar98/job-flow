"use server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/user";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
export async function signUpAction(prevState: any, formData: FormData) {
  const name = formData.get('name')?.toString() ?? '';
  const email = formData.get('email')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';

  if (!name || !email || !password) {
    throw new Error('Full name, email, and password are required');
  }

  connectDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { success: false, message: "Email already in use!" };
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  redirect('/sign-in');
}
