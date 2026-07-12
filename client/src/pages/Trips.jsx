import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import { Search, Plus } from "lucide-react";

const trips = [
  {
    id: "TR-1001",
    vehicle: "Tata Prima",
    driver: "Rahul Patel",
    source: "Ahmedabad",
    destination: "Surat",
    cargo: "450 kg",
    distance: "280 km",
    status: "Active",
  },
  {
    id: "TR-1002",
    vehicle: "Ashok Leyland",
    driver: "Aman Shah",
    source: "Vadodara",
    destination: "Rajkot",
    cargo: "700 kg",
    distance: "220 km",
    status: "Completed",
  },
  {
    id: "TR-1003",
    vehicle: "Mahindra Bolero",
    driver: "Neha Verma",
    source: "Surat",
    destination: "Mumbai",
    cargo: "250 kg",
    distance: "310 km",
    status: "Pending",
  },
  {
    id: "TR-1004",
    vehicle: "Eicher Pro",
    driver: "Karan Singh",
    source: "Pune",
    destination: "Nagpur",
    cargo: "900 kg",
    distance: "720 km",
    status: "Cancelled",
  },
];

export default function Trips() {
  const total = trips.length;
  const active = trips.filter(t => t.status === "Active").length;
  const completed = trips.filter(t => t.status === "Completed").length;
  const pending = trips.filter(t => t.status === "Pending").length;

  return (
    <div className="space-y-6">

      <PageHeader
        title="Trip Management"
        subtitle="Manage trips and dispatch operations"
        action={
          <Button>
            <Plus size={18} className="mr-2 inline" />
            Create Trip
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-5">
          <p className="text-gray-500">Total Trips</p>
          <h2 className="text-3xl font-bold mt-2">{total}</h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Active Trips</p>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            {active}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {completed}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {pending}
          </h2>
        </Card>
      </div>

      <Card className="p-4">
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <Input
            placeholder="Search trips..."
            className="pl-10"
          />
        </div>
      </Card>

      <Card className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Trip ID</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Source</th>
              <th className="p-4 text-left">Destination</th>
              <th className="p-4 text-left">Cargo</th>
              <th className="p-4 text-left">Distance</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip) => (
              <tr
                key={trip.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-medium">{trip.id}</td>
                <td className="p-4">{trip.vehicle}</td>
                <td className="p-4">{trip.driver}</td>
                <td className="p-4">{trip.source}</td>
                <td className="p-4">{trip.destination}</td>
                <td className="p-4">{trip.cargo}</td>
                <td className="p-4">{trip.distance}</td>

                <td className="p-4">
                  <Badge
                    color={
                      trip.status === "Completed"
                        ? "green"
                        : trip.status === "Active"
                        ? "blue"
                        : trip.status === "Pending"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {trip.status}
                  </Badge>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <Button className="px-3 py-1">
                      View
                    </Button>

                    <Button className="bg-blue-600 hover:bg-blue-700 px-3 py-1">
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

    </div>
  );
}