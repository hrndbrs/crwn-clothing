import mapDocToModel from "@/utils/helpers/mapDocToModel";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	NextOrObserver,
	User,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCvHByOXIEbom_ueAi5u7CMLrvcooOzslM",
	authDomain: "crwn-clothing-hbrs.firebaseapp.com",
	projectId: "crwn-clothing-hbrs",
	storageBucket: "crwn-clothing-hbrs.appspot.com",
	messagingSenderId: "764401332086",
	appId: "1:764401332086:web:91475cc24dd64ad57dd457",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signOutUser = () => signOut(auth);

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const emailSignIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const signUpWithEmailAndPassword = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const onAuthStateChangedListener = (cb: NextOrObserver<User>) =>
	onAuthStateChanged(auth, cb);

export async function getCollection(collectionName: string, id?: string) {
	if (id) {
		const docRef = doc(db, collectionName, id);
		const snapshot = await getDoc(docRef);

		const model = mapDocToModel(snapshot);

		return model;
	}
	const collectionRef = collection(db, collectionName);
	const { docs } = await getDocs(collectionRef);

	const model = docs.map(mapDocToModel);

	return model;
}

export async function createUserDocument(
	userAuth: User,
	additionals: { [k: string]: string } = {}
) {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { email, displayName } = userAuth;
		const createdAt = new Date();

		const payload = { displayName, email, createdAt, ...additionals };

		try {
			await setDoc(userDocRef, payload);
			return { user: userDocRef, created: true };
		} catch (error) {
			console.error(error);
			return { error, created: false };
		}
	}

	return { user: userDocRef, created: false };
}

export type AuthStateChangeListener = typeof onAuthStateChangedListener;
