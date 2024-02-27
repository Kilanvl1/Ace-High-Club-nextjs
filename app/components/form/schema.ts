import { z } from "zod";

export function useEmailSchema() {
  return z
    .string({ required_error: "Email is required" })
    .email({ message: "This must be a valid email address" });
}
