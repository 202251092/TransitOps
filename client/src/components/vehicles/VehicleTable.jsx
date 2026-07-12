import Card from "../ui/Card";
import VehicleRow from "./VehicleRow";

export default function VehicleTable({ vehicles }) {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Registration</th>
            <th className="p-4">Vehicle</th>
            <th className="p-4">Type</th>
            <th className="p-4">Driver</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((vehicle) => (
            <VehicleRow
              key={vehicle.id}
              vehicle={vehicle}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
}