export type Product = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
};

export type CartItem = Product & { quantity: number };

export type CartStore = {
	isOpen: boolean;
	cartItems: CartItem[];
	setIsOpen: () => void;
	addItemToCart: (product: Product) => void;
	removeItemFromCart: (id: string, all?: boolean) => void;
};

export type AuthStore<T> = {
	currentUser: T | null;
	setCurrentUser: (payload: T | null) => void;
};

export type Category = {
	id: string;
	title: string;
	imageUrl: string;
};

export type ProductsByCategory = {
	id: string;
	title: string;
	items: Product[];
};
