import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import { Search, UserPlus } from "lucide-react";

const drivers = [
  {
    id: 1,
    name: "Rahul Patel",
    license: "GJ202300123",
    category: "HMV",
    phone: "+91 9876543210",
    safety: 96,
    status: "Available",
  },
  {
    id: 2,
    name: "Aman Shah",
    license: "GJ202300456",
    category: "LMV",
    phone: "+91 9876500000",
    safety: 91,
    status: "On Trip",
  },
  {
    id: 3,
    name: "Neha Verma",
    license: "DL202200789",
    category: "HMV",
    phone: "+91 9988776655",
    safety: 88,
    status: "Off Duty",
  },
  {
    id: 4,
    name: "Karan Singh",
    license: "MH202101111",
    category: "HMV",
    phone: "+91 9000012345",
    safety: 82,
    status: "Suspended",
  },
];

export default function Drivers() {
  const total = drivers.length;
  const available = drivers.filter(d => d.status === "Available").length;
  const onTrip = drivers.filter(d => d.status === "On Trip").length;
  const suspended = drivers.filter(d => d.status === "Suspended").length;

  return (
    <div className="space-y-6">

      <PageHeader
        title="Driver Management"
        subtitle="Manage driver profiles and assignments"
        action={
          <Button>
            <UserPlus size={18} className="mr-2 inline" />
            Add Driver
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-5">
          <p className="text-gray-500">Total Drivers</p>
          <h2 className="text-3xl font-bold mt-2">{total}</h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Available</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {available}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">On Trip</p>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            {onTrip}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Suspended</p>
          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {suspended}
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
            placeholder="Search driver..."
            className="pl-10"
          />
        </div>
      </Card>

      <Card className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">License</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Safety</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map(driver => (
              <tr
                key={driver.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{driver.name}</td>
                <td className="p-4">{driver.license}</td>
                <td className="p-4">{driver.category}</td>
                <td className="p-4">{driver.phone}</td>
                <td className="p-4">{driver.safety}%</td>

                <td className="p-4">
                  <Badge
                    color={
                      driver.status === "Available"
                        ? "green"
                        : driver.status === "On Trip"
                        ? "blue"
                        : driver.status === "Off Duty"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {driver.status}
                  </Badge>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <Button className="px-3 py-1">
                      Edit
                    </Button>

                    <Button className="bg-red-500 hover:bg-red-600 px-3 py-1">
                      Delete
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