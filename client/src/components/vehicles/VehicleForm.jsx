import { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

export default function VehicleForm({
  onSave,
  onCancel,
}) {
  const [vehicle, setVehicle] = useState({
    registration: "",
    name: "",
    type: "",
    driver: "",
    capacity: "",
    odometer: "",
    acquisitionCost: "",
    status: "Available",
  });

  function handleChange(e) {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !vehicle.registration ||
      !vehicle.name ||
      !vehicle.type
    ) {
      alert("Please fill all required fields.");
      return;
    }

    await onSave({
      ...vehicle,
      capacity: Number(vehicle.capacity),
      odometer: Number(vehicle.odometer),
      acquisitionCost: Number(vehicle.acquisitionCost),
    });

    setVehicle({
      registration: "",
      name: "",
      type: "",
      driver: "",
      capacity: "",
      odometer: "",
      acquisitionCost: "",
      status: "Available",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        name="registration"
        placeholder="Registration Number"
        value={vehicle.registration}
        onChange={handleChange}
      />

      <Input
        name="name"
        placeholder="Vehicle Name"
        value={vehicle.name}
        onChange={handleChange}
      />

      <Input
        name="type"
        placeholder="Vehicle Type"
        value={vehicle.type}
        onChange={handleChange}
      />

      <Input
        name="driver"
        placeholder="Driver Name"
        value={vehicle.driver}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="capacity"
        placeholder="Maximum Capacity (kg)"
        value={vehicle.capacity}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="odometer"
        placeholder="Current Odometer"
        value={vehicle.odometer}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="acquisitionCost"
        placeholder="Acquisition Cost"
        value={vehicle.acquisitionCost}
        onChange={handleChange}
      />

      <select
        name="status"
        value={vehicle.status}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-3"
      >
        <option value="Available">Available</option>
        <option value="On Trip">On Trip</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Retired">Retired</option>
      </select>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="button"
          className="bg-gray-500 hover:bg-gray-600"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button type="submit">
          Save Vehicle
        </Button>
      </div>
    </form>
  );
}