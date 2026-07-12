import { useMemo, useState } from "react";

import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";

import VehicleStats from "../components/vehicles/VehicleStats";
import VehicleSearch from "../components/vehicles/VehicleSearch";
import VehicleTable from "../components/vehicles/VehicleTable";
import VehicleDialog from "../components/vehicles/VehicleDialog";

import useVehicles from "../hooks/useVehicles";

export default function Vehicles() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const {
    vehicles,
    loading,
    addVehicle,
    updateVehicle,
    deleteVehicle,
  } = useVehicles();

  const filteredVehicles = useMemo(() => {
    const query = search.toLowerCase();

    return vehicles.filter((vehicle) => {
      return (
        vehicle.registration?.toLowerCase().includes(query) ||
        vehicle.name?.toLowerCase().includes(query) ||
        vehicle.driver?.toLowerCase().includes(query) ||
        vehicle.type?.toLowerCase().includes(query) ||
        vehicle.status?.toLowerCase().includes(query)
      );
    });
  }, [vehicles, search]);

  if (loading) {
    return (
      <div className="p-8 text-center text-lg">
        Loading vehicles...
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Vehicle Management"
        subtitle="Manage your fleet vehicles"
        action={
          <Button onClick={() => setOpen(true)}>
            + Add Vehicle
          </Button>
        }
      />

      <VehicleStats vehicles={filteredVehicles} />

      <div className="mb-6">
        <VehicleSearch
          value={search}
          onChange={setSearch}
        />
      </div>

      <VehicleTable
        vehicles={filteredVehicles}
        onEdit={updateVehicle}
        onDelete={deleteVehicle}
      />

      <VehicleDialog
        open={open}
        onOpenChange={setOpen}
        addVehicle={addVehicle}
      />
    </>
  );
}