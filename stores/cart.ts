import { create } from "zustand";

type CartStore = {
	isOpen: boolean;
	setIsOpen: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
	isOpen: false,
	setIsOpen: () => set((prev) => ({ isOpen: !prev.isOpen })),
}));
