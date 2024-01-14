import { z } from "zod";

export const userSignUpSchema = z.object({
	displayName: z.string(),
	email: z.string().email(),
	password: z.string(),
});
