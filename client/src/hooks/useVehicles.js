import { useEffect, useState } from "react";

import {
  subscribeToVehicles,
  addVehicle as addVehicleService,
  updateVehicle as updateVehicleService,
  deleteVehicle as deleteVehicleService,
} from "../services/vehicleService";

export default function useVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToVehicles((data) => {
      setVehicles(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function addVehicle(vehicle) {
    await addVehicleService(vehicle);
  }

  async function updateVehicle(id, vehicle) {
    await updateVehicleService(id, vehicle);
  }

  async function deleteVehicle(id) {
    await deleteVehicleService(id);
  }

  return {
    vehicles,
    loading,
    addVehicle,
    updateVehicle,
    deleteVehicle,
  };
}