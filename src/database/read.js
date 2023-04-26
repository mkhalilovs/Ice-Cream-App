import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function loadFromFirebase() {
	try {
		const querySnapshot = await getDocs(collection(db, "items"));

		const data = [];
		querySnapshot.forEach((doc) => {
			data.push({
				...doc.data(),
				id: doc.id,
			});
		});
		return data;
	} catch (error) {
		throw new Error("Failed to load the database.");
	}
}
