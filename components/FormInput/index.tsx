import {
	ChangeEvent,
	useCallback,
	useState,
	ComponentPropsWithoutRef,
} from "react";
import "./form-input.styles.scss";

export interface FormInputInterface extends ComponentPropsWithoutRef<"input"> {
	label?: string;
}

function FormInput({ label, ...props }: FormInputInterface) {
	const [input, setInput] = useState("");

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
		[]
	);
	return (
		<div className="group">
			<input
				className="form-input"
				type="text"
				{...props}
				value={input}
				onChange={handleChange}
			/>
			{label && (
				<label
					htmlFor={props.name}
					className={`${input.length > 0 ? "shrink" : ""} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
}

export default FormInput;
