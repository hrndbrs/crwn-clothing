"use client";
import { onAuthStateChangedListener } from "@/config/firebase";
import useAuthGuard from "@/hooks/useAuthGuard";

function AuthWrapper({ children }: { children: React.ReactNode }) {
	useAuthGuard(onAuthStateChangedListener);
	return <>{children}</>;
}

export default AuthWrapper;
