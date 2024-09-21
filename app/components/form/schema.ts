import { z } from "zod";

export function useEmailSchema() {
  return z
    .string({ required_error: "Email is required" })
    .email({ message: "This must be a valid email address" });
}

export function usePasswordSchema() {
  return z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" });
}

export function useUsernameSchema() {
  return z
    .string({ required_error: "Username is required" })
    .min(3, { message: "Username must be at least 3 characters" });
}
