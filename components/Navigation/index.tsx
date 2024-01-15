"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import CrwnLogo from "@/public/icons/crown.svg";
import { signOutUser } from "@/config/firebase";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import "./navigation.styles.scss";

async function userSignOut() {
	await signOutUser();
}

function Navigation() {
	const currentUser = useAuthStore((state) => state.currentUser);
	const isCartOpen = useCartStore((state) => state.isOpen);

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
				<CartIcon />
			</div>
			{isCartOpen && <CartDropdown />}
		</div>
	);
}

export default Navigation;
