import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import { Search, Wrench } from "lucide-react";

const maintenance = [
  {
    id: "MT-1001",
    vehicle: "Tata Prima",
    service: "Oil Change",
    mechanic: "Rakesh Patel",
    cost: "₹5,200",
    date: "12 Jul 2026",
    status: "In Progress",
  },
  {
    id: "MT-1002",
    vehicle: "Ashok Leyland",
    service: "Brake Inspection",
    mechanic: "Mahesh Kumar",
    cost: "₹8,400",
    date: "14 Jul 2026",
    status: "Scheduled",
  },
  {
    id: "MT-1003",
    vehicle: "Mahindra Bolero",
    service: "Engine Service",
    mechanic: "Suresh Patel",
    cost: "₹18,500",
    date: "08 Jul 2026",
    status: "Completed",
  },
  {
    id: "MT-1004",
    vehicle: "Eicher Pro",
    service: "Tyre Replacement",
    mechanic: "Ajay Singh",
    cost: "₹12,000",
    date: "16 Jul 2026",
    status: "Pending",
  },
];

export default function Maintenance() {
  const total = maintenance.length;
  const active = maintenance.filter(
    (m) => m.status === "In Progress"
  ).length;

  const completed = maintenance.filter(
    (m) => m.status === "Completed"
  ).length;

  const scheduled = maintenance.filter(
    (m) => m.status === "Scheduled"
  ).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Maintenance Management"
        subtitle="Track vehicle servicing and maintenance records"
        action={
          <Button>
            <Wrench size={18} className="mr-2 inline" />
            Add Maintenance
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-5">
          <p className="text-gray-500">Total Records</p>
          <h2 className="mt-2 text-3xl font-bold">{total}</h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">In Progress</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            {active}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Completed</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {completed}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Scheduled</p>
          <h2 className="mt-2 text-3xl font-bold text-yellow-600">
            {scheduled}
          </h2>
        </Card>
      </div>

      <Card className="p-4">
        <div className="relative max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <Input
            placeholder="Search maintenance..."
            className="pl-10"
          />
        </div>
      </Card>

      <Card className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Record ID</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Mechanic</th>
              <th className="p-4 text-left">Cost</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {maintenance.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-medium">{item.id}</td>
                <td className="p-4">{item.vehicle}</td>
                <td className="p-4">{item.service}</td>
                <td className="p-4">{item.mechanic}</td>
                <td className="p-4">{item.cost}</td>
                <td className="p-4">{item.date}</td>

                <td className="p-4">
                  <Badge
                    color={
                      item.status === "Completed"
                        ? "green"
                        : item.status === "In Progress"
                        ? "blue"
                        : item.status === "Scheduled"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {item.status}
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