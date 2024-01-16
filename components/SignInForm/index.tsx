"use client";

import FormInput from "../FormInput";
import Button, { BUTTON_TYPE_CLASS } from "../Button";
import { signInWithGooglePopup, emailSignIn } from "@/config/firebase";
import { addUserToDb } from "@/app/auth/actions";
import "./sign-in-form.styles.scss";
import { userSignInSchema } from "@/utils/schema";

async function logGoogleUser() {
	try {
		const credential = await signInWithGooglePopup();
		await addUserToDb(JSON.parse(JSON.stringify(credential)));
	} catch (error) {
		console.log(error);
	}
}

export async function signInWithEmailAndPassword(formData: FormData) {
	const form = Object.fromEntries(formData.entries());
	try {
		const { email, password } = userSignInSchema.parse(form);
		const credential = await emailSignIn(email, password);
		await addUserToDb(JSON.parse(JSON.stringify(credential)));
	} catch (error) {
		console.log(error);
	}
}

function SignInForm() {
	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form action={signInWithEmailAndPassword}>
				<FormInput label="Email" name="email" required />
				<FormInput label="Password" name="password" required type="password" />
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPE_CLASS.GOOGLE}
						onClick={logGoogleUser}
					>
						Google
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SignInForm;
