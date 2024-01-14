import { ComponentPropsWithoutRef } from "react";
import "./button.styles.scss";

export enum BUTTON_TYPE_CLASS {
	GOOGLE = "google-sign-in",
	INVERTED = "inverted",
}

interface CustomButtonInterface extends ComponentPropsWithoutRef<"button"> {
	buttonType?: BUTTON_TYPE_CLASS;
}

function Button({ children, buttonType, ...props }: CustomButtonInterface) {
	return (
		<button className={`button-container ${buttonType}`} {...props}>
			{children}
		</button>
	);
}

export default Button;
