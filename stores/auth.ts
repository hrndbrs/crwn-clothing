import { create } from "zustand";
import { User } from "firebase/auth";

type AuthStore = {
	currentUser: User | null;
	setCurrentUser: (payload: User | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
	currentUser: null,
	setCurrentUser: (payload) => set({ currentUser: payload }),
}));
