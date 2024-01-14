"use client";
import { signInWithGooglePopup } from "@/config/firebase";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import { googleSignIn } from "./action";

function SignIn() {
	async function logGoogleUser() {
		try {
			const credential = await signInWithGooglePopup();
			const authToken = await credential.user.getIdToken();
			await googleSignIn(JSON.parse(JSON.stringify(credential)), authToken);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div>
			SignIn <button onClick={logGoogleUser}>Sign in with google</button>
			<SignUpForm />
		</div>
	);
}

export default SignIn;
