import Link from "next/link";
import Image from "next/image";
import CrwnLogo from "@/public/icons/crown.svg";
import "./navigation.styles.scss";

function Navigation() {
	return (
		<div className="navigation">
			<Link className="logo-container" href="/">
				<Image className="logo" src={CrwnLogo} alt="icon" />
			</Link>
			<div className="nav-links-container">
				<Link className="nav-link" href="/shop">
					SHOP
				</Link>
				<Link className="nav-link" href="/auth">
					SIGN IN
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
