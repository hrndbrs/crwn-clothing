"use client";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import SignInForm from "@/components/SignInForm/SignInForm";
import "./auth.styles.scss";

function Auth() {
	return (
		<div className="authentication-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
}

export default Auth;
