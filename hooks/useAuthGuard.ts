import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth";
import { AuthStateChangeListener } from "../config/firebase";

export default function useAuthGuard(callback: AuthStateChangeListener) {
	const { currentUser, setCurrentUser } = useAuthStore((state) => state);
	const router = useRouter();
	const path = usePathname();

	if (currentUser && path === "/auth") router.push("/");

	useEffect(() => {
		const unsubscribe = callback((user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return currentUser;
}
