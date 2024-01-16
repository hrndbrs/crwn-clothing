import { create } from "zustand";
import { User } from "firebase/auth";
import { AuthStore } from "@/utils/types";

export const useAuthStore = create<AuthStore<User>>((set) => ({
	currentUser: null,
	setCurrentUser: (payload) => set({ currentUser: payload }),
}));
