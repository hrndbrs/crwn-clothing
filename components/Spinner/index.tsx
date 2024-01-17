import SpinnerContainer from "./SpinnerContainer";
import "./spinner.styles.scss";

function Spinner() {
	return (
		<div className="spinner-overlay">
			<SpinnerContainer />
		</div>
	);
}

export default Spinner;
