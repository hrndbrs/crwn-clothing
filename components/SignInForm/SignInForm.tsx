import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE_CLASS } from "../Button/Button";
import { signInWithGooglePopup } from "@/config/firebase";
import { googleSignIn, signInWithEmailAndPassword } from "@/app/auth/action";
import "./sign-in-form.styles.scss";

async function logGoogleUser() {
	try {
		const credential = await signInWithGooglePopup();
		const authToken = await credential.user.getIdToken();
		await googleSignIn(JSON.parse(JSON.stringify(credential)), authToken);
	} catch (err) {
		console.log(err);
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
