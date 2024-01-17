"use client";

import { useFormStatus } from "react-dom";
import { ComponentPropsWithoutRef } from "react";
import SpinnerContainer from "../Spinner/SpinnerContainer";
import "./button.styles.scss";

export enum BUTTON_TYPE_CLASS {
	GOOGLE = "google-sign-in",
	INVERTED = "inverted",
}

interface CustomButtonInterface extends ComponentPropsWithoutRef<"button"> {
	buttonType?: BUTTON_TYPE_CLASS;
	hasLoadingState?: boolean;
}

function Button({
	children,
	buttonType,
	hasLoadingState,
	...props
}: CustomButtonInterface) {
	const { pending } = useFormStatus();
	const isLoading = hasLoadingState && pending;

	return (
		<button
			className={`button-container ${buttonType}`}
			disabled={isLoading}
			{...props}
		>
			{isLoading ? <SpinnerContainer /> : children}
		</button>
	);
}

export default Button;
