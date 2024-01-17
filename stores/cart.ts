import { create } from "zustand";
import { CartStore, Product } from "@/utils/types";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
	persist<CartStore>(
		(set) => ({
			isOpen: false,
			cartItems: [],
			setIsOpen: () => set((prev) => ({ isOpen: !prev.isOpen })),
			addItemToCart: (product: Product) =>
				set((prev) => {
					const { cartItems } = prev;
					let isItemInCart = false;
					const updatedCartItems = cartItems.map((item) => {
						if (item.id === product.id) {
							item.quantity++;
							isItemInCart = true;
						}
						return item;
					});

					if (!isItemInCart) updatedCartItems.push({ ...product, quantity: 1 });

					return { cartItems: updatedCartItems };
				}),
			removeItemFromCart: (id: string, all = false) =>
				set((prev) => {
					const { cartItems } = prev;

					const itemIndex = cartItems.findIndex((item) => item.id === id);
					const cartItem = cartItems[itemIndex];

					switch (cartItem?.quantity > 1) {
						case true:
							if (!all) {
								cartItem.quantity--;
								break;
							}
						case false:
							cartItems.splice(itemIndex, 1);
					}
					return { cartItems };
				}),
			clearCart: () => set({ cartItems: [] }),
		}),
		{
			name: "cart",
			storage: createJSONStorage(() => sessionStorage),
			partialize: (state) => ({ cartItems: state.cartItems }),
			skipHydration: true,
		}
	)
);
