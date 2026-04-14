"use server";

import { signOut as authSignOut } from "@/auth";

export async function signOutAction() {
  return await authSignOut();
}
