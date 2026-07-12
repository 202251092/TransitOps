import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import toast from "react-hot-toast";
import VehicleForm from "./VehicleForm";

export default function VehicleDialog({
  open,
  onOpenChange,
  addVehicle,
}) {
  async function handleSave(vehicle) {
    try {
      await addVehicle(vehicle);

      toast.success("Vehicle added successfully");

      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add vehicle");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Add Vehicle
          </DialogTitle>
        </DialogHeader>

        <VehicleForm
          onSave={handleSave}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}