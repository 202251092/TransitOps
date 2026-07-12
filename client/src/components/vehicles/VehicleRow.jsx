import Badge from "../ui/Badge";
import { Pencil, Trash2 } from "lucide-react";

export default function VehicleRow({ vehicle }) {
  let color = "green";

  if (vehicle.status === "On Trip") color = "blue";
  if (vehicle.status === "Maintenance") color = "red";

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">{vehicle.registration}</td>
      <td className="p-4">{vehicle.name}</td>
      <td className="p-4">{vehicle.type}</td>
      <td className="p-4">{vehicle.driver}</td>

      <td className="p-4">
        <Badge color={color}>{vehicle.status}</Badge>
      </td>

      <td className="p-4">
        <div className="flex gap-3">
          <button className="text-blue-600 hover:text-blue-800">
            <Pencil size={18} />
          </button>

          <button className="text-red-600 hover:text-red-800">
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}