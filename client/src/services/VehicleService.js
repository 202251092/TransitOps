import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const vehiclesRef = collection(db, "vehicles");

// Real-time listener
export function subscribeToVehicles(callback) {
  return onSnapshot(vehiclesRef, (snapshot) => {
    const vehicles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(vehicles);
  });
}

// Get all vehicles (optional)
export async function getVehicles() {
  const snapshot = await getDocs(vehiclesRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// Add
export async function addVehicle(vehicle) {
  return addDoc(vehiclesRef, {
    ...vehicle,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

// Update
export async function updateVehicle(id, vehicle) {
  return updateDoc(doc(db, "vehicles", id), {
    ...vehicle,
    updatedAt: serverTimestamp(),
  });
}

// Delete
export async function deleteVehicle(id) {
  return deleteDoc(doc(db, "vehicles", id));
}