import {
	collection,
	addDoc,
} from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
	try {
		const docRef = await addDoc(collection(db, "items"), data);
		return docRef.id;
	} catch (e) {
		console.error("Error adding document: ", e);
		return null;
	}
}
