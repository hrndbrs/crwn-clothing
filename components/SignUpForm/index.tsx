"use client";

import FormInput from "../FormInput";
import Button from "../Button";
import "./sign-up-form.styles.scss";
import { userSignUpSchema } from "@/utils/schema";
import { addUserToDb } from "@/app/auth/actions";
import { signUpWithEmailAndPassword } from "@/config/firebase";

export async function userSignUp(formData: FormData) {
	const form = Object.fromEntries(formData.entries());

	try {
		if (form.password !== form.confirmPassword) return;

		const { displayName, email, password } = userSignUpSchema.parse(form);
		const additionals = { displayName };
		const credential = await signUpWithEmailAndPassword(email, password);
		await addUserToDb(JSON.parse(JSON.stringify(credential)), additionals);
	} catch (error) {
		console.log(error);
	}
}

function SignUpForm() {
	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form action={userSignUp}>
				<FormInput label="Display Name" name="displayName" required />
				<FormInput label="Email" name="email" required />
				<FormInput label="Password" name="password" required type="password" />
				<FormInput
					label="Confirm Password"
					name="confirmPassword"
					required
					type="password"
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
}

export default SignUpForm;
