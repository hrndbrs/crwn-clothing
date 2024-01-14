"use client";

import Link from "next/link";
import Image from "next/image";
import useAuthGuard from "@/hooks/useAuthGuard";
import CrwnLogo from "@/public/icons/crown.svg";
import { onAuthStateChangedListener, signOutUser } from "@/config/firebase";
import "./navigation.styles.scss";

async function userSignOut() {
	await signOutUser();
}

function Navigation() {
	const currentUser = useAuthGuard(onAuthStateChangedListener);

	return (
		<div className="navigation">
			<Link className="logo-container" href="/">
				<Image className="logo" src={CrwnLogo} alt="icon" />
			</Link>
			<div className="nav-links-container">
				<Link className="nav-link" href="/shop">
					SHOP
				</Link>
				{currentUser ? (
					<span className="nav-link" onClick={userSignOut}>
						SIGN OUT
					</span>
				) : (
					<Link className="nav-link" href="/auth">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
}

export default Navigation;
