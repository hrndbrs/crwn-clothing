import { userSignUp } from "@/app/auth/action";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./sign-up-form.styles.scss";

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
