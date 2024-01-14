import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	User,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCvHByOXIEbom_ueAi5u7CMLrvcooOzslM",
	authDomain: "crwn-clothing-hbrs.firebaseapp.com",
	projectId: "crwn-clothing-hbrs",
	storageBucket: "crwn-clothing-hbrs.appspot.com",
	messagingSenderId: "764401332086",
	appId: "1:764401332086:web:91475cc24dd64ad57dd457",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const emailSignIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const signUpWithEmailAndPassword = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export async function createUserDocument(
	userAuth: User,
	additionalInformation = {}
) {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { email, displayName } = userAuth;
		const createdAt = new Date();

		const payload = { displayName, email, createdAt, ...additionalInformation };

		try {
			await setDoc(userDocRef, payload);
		} catch (err) {
			console.error(err);
		}
	}

	return userDocRef;
}

export { FirebaseError } from "firebase/app";
